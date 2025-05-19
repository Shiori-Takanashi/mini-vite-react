import { useState, CSSProperties } from "react";
import { TfiReload } from "react-icons/tfi";

export const route = '/jslesson';
export const label = 'JS Lesson';

const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",           // ← 横並びの各列の縦中央を基準にする
    justifyContent: "center",
    width: "100%",
    maxWidth: "80vw",
    maxHeight: "80vh",             // ← 画面の高さいっぱいに
    margin: "0 auto",
    padding: "0.5rem",
    gap: "2rem"
};


const buttonWrapperStyle: CSSProperties = {
    flex: "0 0 auto",
    minWidth: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",        // ← 上下中央
    alignItems: "center",            // ← 横方向中央（任意）
    height: "100%"                   // ← 親コンテナの高さに合わせる
};

const buttonStyle: CSSProperties = {
    width: "100%",
    height: "3rem",
    fontSize: "1rem",
    cursor: "pointer"
};

const jsonViewerStyle: CSSProperties = {
    flex: "0 0 auto",
    fontSize: "0.65rem",
    minWidth: "300px",
    maxHeight: "80vh",
    overflowY: "auto",
    background: "#f7f7f7",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ddd"
};

const infoBoxStyle: CSSProperties = {
    flex: "0 0 auto",
    minWidth: "200px",
    textAlign: "center"
};

const imageStyle: CSSProperties = {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "0.5rem"
};

export default function JsLesson() {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const res = await fetch('https://heroku.playingbirds.site/random');
            if (!res.ok) throw new Error("API Response was not OK.");
            const json = await res.json();
            setData(json);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setData(null);
        }
    };

    return (
        <div style={containerStyle}>
            {/* 左: ボタン */}
            <div style={buttonWrapperStyle}>
                <button onClick={fetchData} style={buttonStyle}>
                    <TfiReload /> 取得
                </button>
            </div>

            {/* 中央: JSON */}
            <div style={jsonViewerStyle}>
                {error && <p style={{ color: 'red' }}>エラー: {error}</p>}
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>

            {/* 右: 画像と情報 */}
            <div style={infoBoxStyle}>
                {data?.name && <h2>{data.name}</h2>}
                {(data?.type_first || data?.type_second) && (
                    <h3>
                        {data.type_first}
                        {data.type_second ? ` / ${data.type_second}` : ''}
                    </h3>
                )}
                {data?.front_default_url && (
                    <img
                        src={data.front_default_url}
                        alt="ポケモン画像"
                        style={imageStyle}
                    />
                )}
            </div>
        </div>
    );
}
