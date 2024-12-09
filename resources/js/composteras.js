import { showLoadingScreen } from "./loadingScreen.js";
import { centreName } from "./centreName.js";
import { fetchComposters } from "./fetchData.js";

export function loadComposters() {
    showLoadingScreen();
    centreName();
    fetchComposters();
}

document.addEventListener("DOMContentLoaded", loadComposters);