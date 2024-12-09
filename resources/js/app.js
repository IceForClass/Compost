import './bootstrap';
import { loadComposters } from './composteras.js';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

loadComposters();
document.querySelector("#clearTableButton").addEventListener("click", clearTableEvent);

export function clearTableEvent(e) {
    e.target.closest(".hidetable").classList.add("invisible");
    e.target.closest("tbody").innerHTML = "";
}

export function clearTable() {
    const table = document.querySelector(".hidetable");
    if (table) {
        table.classList.add("invisible");
        table.querySelector("tbody").innerHTML = "";
    }
}