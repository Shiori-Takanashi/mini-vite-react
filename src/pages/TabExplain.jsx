// ExplainPage.tsx
export const route = "/tab-explain";
export const label = "Tab Explain"

export default function ExplainPage() {
  return (
    <div style={{ display: "flex", height: "75vh", fontFamily: "sans-serif" }}>
      {/* 左カラム：コード表示 */}
      <div
        style={{
          width: "50%",
          padding: "1rem",
          background: "#1e1e1e",
          color: "#dcdcdc",
          overflow: "auto",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.95rem" }}>
          {`export default function TabExplain() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
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
}`}
        </pre>
      </div>

      {/* 右カラム：解説表示 */}
      <div style={{ width: "50%", padding: "1.5rem", background: "#ffffff", overflow: "auto" }}>
        <h2>コードの解説</h2>

        <p><strong>useStateの使用:</strong><br />
          <code>const [activeIndex, setActiveIndex] = useState(0);</code><br />
          → 現在選択されているタブの番号（インデックス）を保持しています。</p>

        <p><strong>tabs.map(...):</strong><br />
          → タブの配列をもとにボタンを生成しています。クリックすると <code>setActiveIndex</code> が呼ばれます。</p>

        <p><strong>style:</strong><br />
          → JSX内のオブジェクトでインラインスタイルを記述しています。条件分岐により選択中のタブだけ下線・太字になります。</p>

        <p><strong>内容表示部:</strong><br />
          → <code>tabs[activeIndex].content</code> によって現在のタブの本文を取得し、段落ごとに表示しています。</p>

        <p><strong>全体構造:</strong><br />
          → 1つの関数コンポーネントにすべての処理がまとまっており、状態管理、ループ処理、イベント処理、スタイル指定の基本が含まれています。</p>
      </div>
    </div>
  );
}
