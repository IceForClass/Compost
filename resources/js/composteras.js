import { showLoadingScreen } from "./loadingScreen.js";
import { centreName } from "./centreName.js";
import { fetchComposters } from "./fetchData.js";
import { clearTable } from "./app.js";

export function loadComposters() {
    showLoadingScreen();
    clearTable();
    centreName();
    fetchComposters();
}