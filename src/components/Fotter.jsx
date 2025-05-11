import { Link } from 'react-router-dom';

const modulesObj = import.meta.glob('../pages/*.jsx', { eager: true });

const pages = Object.entries(modulesObj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, mod]) => ({
        route: mod.route,
        label: mod.label
    }))
    .filter(p => p.route && p.label);

export default function Fotter() {

}
