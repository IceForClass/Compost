import { showLoadingScreen } from "./loadingScreen.js";
import { centreName } from "./centreName.js";
import { fetchComposters } from "./fetchData.js";

console.log("ola");

export function loadComposters() {
    showLoadingScreen();
    centreName();
    fetchComposters();
}

document.removeEventListener("DOMContentLoaded", loadComposters);
//document.addEventListener("DOMContentLoaded", loadComposters);