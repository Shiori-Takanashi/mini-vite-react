import { extendTheme } from '@chakra-ui/react';
import styles from '../style/ColorsChakraV2.module.css';


const theme = extendTheme();
const chakraColors = theme.colors;

export const route = '/colorschakra';
export const label = 'Color-Chakra-V2';

export default function ColorsChakraV2() {
    const palettes = Object.entries(chakraColors)
        .filter(([_, val]) => typeof val === 'object');

    function getBorderColor(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        if (l > 0.8) return 'rgba(0,0,0,0.4)';
        if (l > 0.7) return 'rgba(0,0,0,0.2)';
        return 'rgba(0,0,0,0.1)';
    }

    return (
        <div style={{ padding: '2rem', backgroundColor: 'white' }}>
            {palettes.map(([name, shades]) => {
                const isWhite = name === 'whiteAlpha';
                return (
                    <section
                        key={name}
                        className={styles.section}
                        style={{ marginBottom: isWhite ? '4rem' : '2rem' }}
                    >
                        <h2 className={styles.title}>{name}</h2>
                        <div className={styles.grid}>
                            {Object.entries(shades).map(([shade, hex]) => (
                                <div
                                    key={shade}
                                    className={styles.swatchWrapper}
                                    style={{
                                        backgroundColor: isWhite ? '#2b2b2b' : 'transparent',
                                    }}
                                >
                                    <div
                                        className={styles.swatch}
                                        style={{
                                            backgroundColor: hex,
                                            /* (1) whiteAlpha だけ赤枠に、(2) それ以外も枠線を描画 */
                                            border: `2px solid ${isWhite ? '#B77171' : getBorderColor(hex)
                                                }`,
                                            /* whiteAlpha は影をなくす */
                                            boxShadow: isWhite ? 'none' : undefined,
                                        }}
                                    >
                                        {isWhite && (
                                            <span className={styles.overlayLabel}>
                                                {shade}
                                            </span>
                                        )}
                                    </div>
                                    {!isWhite && (
                                        <div className={styles.label}>{shade}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
