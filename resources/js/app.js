import './bootstrap';
import { loadComposters } from './composteras.js';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

loadComposters();