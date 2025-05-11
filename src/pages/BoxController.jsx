import { useState } from 'react';
export const route = '/box';
export const label = 'Box Controller';

export default function BoxController() {
    const [size, setSize] = useState(300);
    const clamp = (x, min, max) => Math.max(min, Math.min(x, max));

    const boxStyle = {
        backgroundColor: "green",
        height: `${size}px`,
        width: `${size}px`
    };

    const buttonStyle = {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        cursor: "pointer"
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "85vh",
        width: "100vw"
    };

    const displayAreaStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "500px"
    };

    return (
        <div style={containerStyle}>
            <div style={displayAreaStyle}>
                <div style={boxStyle}></div>
                <span>Size: {size}px</span>
            </div>

            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                <button style={buttonStyle} onClick={() => setSize(clamp(size + 10, 100, 450))}>Bigger</button>
                <button style={buttonStyle} onClick={() => setSize(300)}>Default</button>
                <button style={buttonStyle} onClick={() => setSize(clamp(size - 10, 100, 450))}>Smaller</button>
            </div>
        </div>
    );
}
