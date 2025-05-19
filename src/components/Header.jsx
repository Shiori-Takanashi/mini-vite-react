import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import colors from 'tailwindcss/colors';

const modulesObj = import.meta.glob('../pages/*.{js,jsx,ts,tsx}', { eager: true });
const headerBgColor = colors.green[300];
const linkMenuBgColor = colors.green[100];
const popupBgColor = colors.gray[100];
const popupTextColor = colors.gray[800];

const pages = Object.entries(modulesObj)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, mod]) => ({
        route: mod.route,
        label: mod.label,
        infoText: mod.infoText || "" // infoTextを取得、なければ空文字
    }))
    .filter(p => p.route && p.label);

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [infoPopupOpen, setInfoPopupOpen] = useState(false);
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
                            position: "relative",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "2rem",
                            top: "0.3rem",
                            userSelect: "none",
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
                    userSelect: "none",
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
                                    fontSize: "clamp(0.6rem, 3vw, 1.2rem)",
                                    padding: "0.3rem 1rem"
                                }}
                            >
                                {label}
                            </Link>
                        ))}
                </div>
            )}
            <FaInfoCircle
                style={{
                    position: "absolute",
                    right: "2rem",
                    top: "1.5rem",
                    fontSize: "2rem",
                    cursor: "pointer"
                }}
                onClick={() => setInfoPopupOpen(true)}
            />

            {/* 情報ポップアップ */}
            {infoPopupOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10000 // ヘッダーより手前に表示
                }}>
                    <div style={{
                        background: popupBgColor,
                        color: popupTextColor,
                        padding: "2rem",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        maxWidth: "90%",
                        width: "600px",
                        position: "relative",
                        whiteSpace: "pre-wrap", // 改行を反映
                        lineHeight: "1.6"
                    }}>
                        <button
                            onClick={() => setInfoPopupOpen(false)}
                            style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                background: "none",
                                border: "none",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                color: popupTextColor
                            }}
                        >
                            <FaTimes />
                        </button>
                        <p>{currentPage?.infoText || ""}</p>
                    </div>
                </div>
            )}
        </header>
    );
}
