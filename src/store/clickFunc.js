import { writable } from 'svelte/store';

let toggleNavbar = writable(true);

export { toggleNavbar };
