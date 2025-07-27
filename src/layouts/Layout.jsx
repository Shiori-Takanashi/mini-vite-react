import { Outlet } from 'react-router-dom';
import Header from './Header';
import Fotter from './Fotter';
import { useEffect } from 'react';


export default function Layout() {
    useEffect(() => {
        // 強制的にフォーカス解除
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }, []);
    return (

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // ← ビューポート全体の高さ
            }}
        >
            <div style={{ flex: '0 0 auto' }}>
                <Header />
            </div>

            <main
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '1rem' // ← bodyにあたる余白
                }}
            >
                <Outlet />
            </main>

            <div style={{ flex: '0 0 auto' }}>
                <Fotter />
            </div>
        </div>
    );
}
