// PokeTypeMatrix.tsx
export const route = "/poke-types";
export const label = "Poke Types";

import { typeChart } from "../data/type_chart";
import { convertToMatrix } from "../utils/convertTypeChart";
import styles from "../style/PokeTypeMatrix.module.css";

const { typeNames, damageMatrix } = convertToMatrix(typeChart);

function getClassName(value: number): string {
    if (value === 2) return styles.super;
    if (value === 0.5) return styles.notVery;
    if (value === 0) return styles.noEffect;
    if (value === 1) return styles.invisible;
    return styles.normal;
}

export default function PokeTypeMatrix() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th></th>
                            {typeNames.map((name, idx) => (
                                <th key={idx}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {damageMatrix.map((row, i) => (
                            <tr key={i}>
                                <th className={styles.rowHeader}>{typeNames[i]}</th>
                                {row.map((value, j) => (
                                    <td key={j} className={getClassName(value)}>
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
