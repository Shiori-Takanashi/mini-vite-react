import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import colors from 'tailwindcss/colors';

const modulesObj = import.meta.glob('../pages/*.jsx', { eager: true });
const headerBgColor = colors.green[300];
const linkMenuBgColor = colors.green[100];

const pages = Object.entries(modulesObj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, mod]) => ({
        route: mod.route,
        label: mod.label
    }))
    .filter(p => p.route && p.label);

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPage = pages.find(p => p.route === location.pathname);

    return (
        <header style={{
            background: headerBgColor,
            position: "relative",
            zIndex: 9999
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                position: "relative"
            }}>
                {/* 左上：メニュー */}
                <div style={{ position: "absolute", left: "1rem" }}>
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "2.5rem"
                        }}
                    >
                        <FiMenu />
                    </button>
                </div>

                {/* 中央：現在地ラベル */}
                <div style={{
                    fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                    {currentPage?.label || ""}
                </div>
            </div>

            {/* メニュー */}
            {menuOpen && (
                <div style={{
                    position: "absolute",
                    top: "4rem",
                    left: "1rem",
                    background: linkMenuBgColor,
                    borderTop: "1px solid #ccc",
                    padding: "1rem",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                }}>
                    {pages
                        .filter(({ route }) => route !== location.pathname)
                        .map(({ route, label }) => (
                            <Link
                                key={route}
                                to={route}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontSize: "clamp(1rem, 3vw, 1.2rem)",
                                    padding: "0.5rem 1rem"
                                }}
                            >
                                {label}
                            </Link>
                        ))}
                </div>
            )}
        </header>
    );
}
