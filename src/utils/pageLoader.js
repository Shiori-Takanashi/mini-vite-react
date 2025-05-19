// src/utils/pageLoader.js
export function loadPages() {


    const modulesObj = import.meta.glob('../pages/*.{js,jsx,ts,tsx}', { eager: true });

    return Object.entries(modulesObj)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([_, mod]) => ({
            route: mod.route,
            label: mod.label,
            Component: mod.default
        }))
        .filter(p => p.route && p.label);
}
