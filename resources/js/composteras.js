import { showLoadingScreen } from "./loadingScreen.js";
import { centreName } from "./centreName.js";
import { fetchComposters } from "./fetchData.js";
import { clearTable, clearComposters } from "./app.js";

export function loadComposters() {
    showLoadingScreen();
    clearComposters();
    clearTable();
    centreName();
    fetchComposters();
}