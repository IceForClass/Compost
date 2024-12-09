import { createBolo } from "./crearBolo.js";
import { beforeForm } from "./beforeForm.js";
import { hideLoadingScreen } from "./loadingScreen.js";

export function printComposter(composter, boloData, registData) {
    const container = document.getElementById("datosCompostera");
    const typeMapping = {
        11: "Aporte",
        22: "Degradación",
        33: "Maduración",
    };

    const emptyMapping = {
        0: "Vacía",
        1: "Ocupada",
    };
    const typeName = typeMapping[composter.type] || "Desconocido";
    const empty = emptyMapping[composter.ocupada] || "Estado desconocido";

    const card = document.createElement("a");
    // card.href = `${window.location.pathname}?composter=${composter.id}`;
    card.className =
        "flex flex-col sm:flex-row gap-4 justify-between items-center block p-6 bg-gradient-to-br from-green-400 to-green-100 dark:from-gray-900 dark:to-dark-highlight rounded-lg shadow-lg hover:shadow-xl mb-4 no-underline";
    card.innerHTML = /* html */ `    
        <div class="flex items-center gap-4">
            <div id="status-icon" class="text-white dark:text-gray-400 dark:bg-green-700 dark:opacity-25 p-2.5 rounded-full border-2 border-gray-200">
                <i class="fa fa-leaf fa-2x"></i>
            </div>
            <div class="text-sm text-gray-700 dark:text-gray-300">
                <h4 class="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
                    Compostera ${composter.id}: <span class="font-medium">${typeName}</span>
                </h4>
                <p>
                    Bolo actual: <span class="font-semibold">${boloData.name}</span>
                </p>
                <p>
                    Estado: <span class="font-semibold">${empty}</span>
                </p>
                <p>
                    Creada el: <span class="font-semibold">${new Date(
        composter.created_at
    ).toLocaleString()}</span>
                </p>
            </div>
        </div>
    `;
    if (composter.ocupada === 1) {
        card.querySelector("#status-icon").classList.add("bg-green-500", "dark:bg-green-500", "dark:text-gray-200", "shadow-md", "shadow-gray-700/50", "dark:shadow-gray-400/50");
        card.querySelector("#status-icon").classList.remove("dark:text-gray-400", "dark:opacity-25");
    }
    const newRegistButton = document.createElement("button");
    const seeRegistButton = document.createElement("button");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "flex gap-2";
    newRegistButton.innerHTML = /* html */ `Nuevo registro <i class="fa fa-regular fa-plus"></i>`;
    seeRegistButton.innerHTML = /* html */ `Ver registros <i class="fa fa-seedling"></i>`;
    newRegistButton.className =
        "flex items-center justify-center gap-2 bg-amber-500 dark:bg-amber-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-btn-primary-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 transition duration-300 ease-in-out";
    seeRegistButton.className =
        "flex items-center justify-center gap-2 bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-btn-primary-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 transition duration-300 ease-in-out";
    newRegistButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (composter.ocupada === 1) {
            beforeForm(composter.id);
        } else if (composter.id === 1 && composter.ocupada === 0) {
            const confirmed = confirm(
                `La compostera ${composter.id} necesita un bolo, ¿crear uno nuevo?`
            );
            if (confirmed) {
                createBolo();
            }
        } else {
            alert(
                `La compostera ${composter.id} está libre, tiene que llegarle un bolo de otra compostera`
            );
        }
    });
    const containerDropdown = document.createElement("div");
    containerDropdown.classList.add("container-dropdown");
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown invisible absolute z-10 my-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none";
    dropdown.setAttribute("role", "menu");
    dropdown.setAttribute("aria-orientation", "vertical");
    dropdown.setAttribute("aria-labelledby", "menu-button");
    dropdown.innerHTML = /* html */ `
    <div class="py-1">
        <button class="dropdown-verActual block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" >Ver ciclo actual</button>
        <button class="dropdown-verHistorico block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Ver histórico</button>
    </div>`;
    if (composter.ocupada === 0) {
        dropdown.querySelector(".dropdown-verActual").classList.add("text-gray-400", "cursor-not-allowed");
        dropdown.querySelector(".dropdown-verActual").classList.remove("text-gray-700", "hover:bg-gray-200");
    }
    seeRegistButton.addEventListener("click", (event) => {
        event.preventDefault();

        // Toggle the dropdown visibility
        dropdown.classList.toggle("invisible");

        // If dropdown is now visible, add event listener to handle clicks outside
        if (!dropdown.classList.contains("invisible")) {
            const handleOutsideClick = (event) => {
                // If the click is outside of the dropdown and the button
                if (!dropdown.contains(event.target) && !seeRegistButton.contains(event.target)) {
                    dropdown.classList.add("invisible");
                    document.removeEventListener("click", handleOutsideClick);
                }
            };
            document.addEventListener("click", handleOutsideClick);
        }
        // Add the event listeners for the menu items
        dropdown.querySelector(".dropdown-verActual").addEventListener("click", () => {
            // seeCurrentCycle(composter.id);
        });
        dropdown.querySelector(".dropdown-verHistorico").addEventListener("click", () => {
            // seeCycleHistory(composter.id);
        });
    });
    containerDropdown.appendChild(seeRegistButton);
    containerDropdown.appendChild(dropdown);
    buttonsDiv.appendChild(newRegistButton);
    buttonsDiv.appendChild(containerDropdown);
    card.appendChild(buttonsDiv);
    container.appendChild(card);
    hideLoadingScreen();
}
function printRegists(regist, container) {

}