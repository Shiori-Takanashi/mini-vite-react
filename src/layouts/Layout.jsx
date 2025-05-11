// src/layouts/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',     // ビューポート全高を一度だけ指定
            }}
        >
            {/* 固定高さのヘッダー */}
            <div style={{ flex: '0 0 auto' }}>
                <Header />
            </div>

            {/* コンテンツ領域：残り高さをすべて使用し、必要に応じてスクロール */}
            <main
                style={{
                    flex: 1,
                    overflowY: 'auto',
                }}
            >
                {/* pages/XXX.jsx がここにレンダリングされる */}
                <Outlet />
            </main>
        </div>
    );
}
