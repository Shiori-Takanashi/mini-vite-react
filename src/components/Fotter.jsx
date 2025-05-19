import { Link } from 'react-router-dom';

const modulesObj = import.meta.glob('../pages/*.{js,jsx,ts,tsx}', { eager: true });

const pages = Object.entries(modulesObj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, mod]) => ({
        route: mod.route,
        label: mod.label
    }))
    .filter(p => p.route && p.label);

export default function Fotter() {
    return (
        <footer style={{
            background: '#ddd',
            padding: '1rem',
            textAlign: 'center',
            fontSize: '0.8rem'
        }}>
            {pages.map(({ route, label }) => (
                <Link
                    key={route}
                    to={route}
                    style={{
                        margin: '0 1rem',
                        textDecoration: 'none',
                        color: 'inherit',
                        userSelect: "none",
                    }}
                >
                    {label}
                </Link>
            ))}
        </footer>
    );
}
