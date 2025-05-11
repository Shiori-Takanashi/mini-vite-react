// src/pages/ColorPalette.jsx
import colors from 'tailwindcss/colors';
import styles from '../style/ColorPalette.module.css'; // CSS module の場合

export const route = '/colors';
export const label = 'Color Palette';



export default function ColorPalette() {
    const palettes = Object.entries(colors)
        .filter(([_, v]) => typeof v === 'object');

    function getBorderColor(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        if (l > 0.8) return 'rgba(0,0,0,0.4)';
        if (l > 0.8) return 'rgba(0,0,0,0.2)';
        if (l > 0.7) return 'rgba(0,0,0,0.2)';
        return 'rgba(0,0,0,0.1)';
    }


    return (
        <div style={{ padding: '2rem' }}>
            {palettes.map(([name, shades]) => (
                <section key={name} style={{ marginBottom: '2rem' }}>
                    <h2 className={styles.title}>
                        {name}
                    </h2>
                    <div className={styles.grid}>
                        {Object.entries(shades).map(([shade, hex]) => (
                            <div
                                className={styles.swatchWrapper}
                                style={{ textAlign: 'center' }}
                                key={shade}
                            >
                                <div
                                    className={styles.swatch}
                                    style={{
                                        backgroundColor: hex,
                                        borderColor: getBorderColor(hex)
                                    }}
                                />
                                <div className={styles.label}>{shade}</div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
