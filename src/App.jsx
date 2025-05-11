// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import colors from 'tailwindcss/colors';
import Layout from './layouts/Layout';
import { loadPages } from './utils/pageLoader';

const appBgColor = colors.gray[100];
const pages = loadPages();

export default function App() {
    return (
        <div style={{ backgroundColor: appBgColor }}>
            <BrowserRouter>
                <Routes>
                    {/* Layout 配下に各ページをネスト */}
                    <Route path="/" element={<Layout />}>
                        {pages.map(({ route, Component }) => (
                            <Route
                                key={route}
                                path={route === '/' ? '' : route.slice(1)}
                                element={<Component />}
                            />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
