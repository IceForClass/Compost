import { showLoadingScreen } from "./loadingScreen.js";
import { centreName } from "./centreName.js";
import { fetchComposters } from "./fetchData.js";

export function loadComposters() {
    showLoadingScreen();
    clearComposters();
    clearTable();
    centreName();
    fetchComposters();
}

document.addEventListener("DOMContentLoaded", loadComposters);
document.querySelector("#clearTableButton").addEventListener("click", clearTableEvent);

export function clearTableEvent(e) {
    const table = e.target.closest(".hidetable");
    if (table) {
        e.target.closest(".hidetable").classList.add("invisible");
        e.target.closest("tbody").innerHTML = "";
    }
}

export function clearTable() {
    const table = document.querySelector(".hidetable");
    if (table) {
        table.classList.add("invisible");
        table.querySelector("tbody").innerHTML = "";
        table.querySelector("#verDetallesRegistro").classList.add("hidden");
    }
}

function clearComposters() {
    const div = document.querySelector("#datosCompostera");
    console.log(div.innerHTML);
    if (div) {
        div.innerHTML = "";
        console.log('clearComposters');
    }
    console.log(div.innerHTML);
}