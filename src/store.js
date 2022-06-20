import { writable } from "svelte/store";

export const loginState = writable(false)

export const user = writable()