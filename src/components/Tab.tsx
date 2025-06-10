// Tab.tsx
import { useState } from "react";

type Tab = {
    label: string;
    content: string[];
};

const tabs: Tab[] = [
    {
        label: "Vanilla JS",
        content: [
            "Vanilla JavaScript（純粋なJS）は、外部ライブラリを使わずにDOMを直接操作する方法です。",
            "addEventListenerなどを多用するため、構造が複雑になると保守性が落ちやすいです。",
            "学習には向きますが、UI構築には効率が悪く、規模が大きくなると破綻しやすくなります。"
        ],
    },
    {
        label: "React + TS",
        content: [
            "React + TypeScriptは、状態管理・UI構造・型安全性の観点から、現在の主流フロントエンド技術です。",
            "JSXでUIを宣言的に書き、useStateなどのフックで状態を管理できます。",
            "タブのようなUI部品もコンポーネント化すれば再利用・拡張が容易になります。"
        ],
    },
    {
        label: "使い分け",
        content: [
            "Vanilla JSは軽量な操作や学習に適しています。",
            "React + TSは中規模以上のUIや状態管理が必要な場面に適しています。",
            "JS/TSに慣れることが目的であれば、Reactを使って小さなUI部品を再構築するのが効率的です。"
        ],
    },
];

export default function TabUI() {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
                {tabs.map((tab, i) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveIndex(i)}
                        style={{
                            padding: "0.5rem 1rem",
                            border: "none",
                            borderBottom: i === activeIndex ? "3px solid #0070f3" : "3px solid transparent",
                            background: "none",
                            cursor: "pointer",
                            fontWeight: i === activeIndex ? "bold" : "normal",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div style={{ padding: "1rem", backgroundColor: "#f9f9f9", minHeight: "150px" }}>
                {tabs[activeIndex].content.map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: "0.75rem", lineHeight: "1.5" }}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
