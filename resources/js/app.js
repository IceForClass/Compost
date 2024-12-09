import './bootstrap';
import { loadComposters } from './composteras.js';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

loadComposters();
document.querySelector("#clearTableButton").addEventListener("click", clearTable);

export function clearTable(e) {
    e.target.closest(".hidetable").classList.add("invisible");
    e.target.closest("tbody").innerHTML = "";
}

