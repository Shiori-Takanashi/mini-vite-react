// pages/DualTypeQuiz.tsx
export const route = "/dual-type-quiz";
export const label = "Dual Type Quiz";

import { useState } from "react";
import { typeChart } from "../data/type_chart";
import { convertToMatrix } from "../utils/convertTypeChart";
import styles from "../style/DualTypeQuiz.module.css";

const { typeNames, damageMatrix } = convertToMatrix(typeChart);

function randomPair(): [number, number] {
    const n = typeNames.length;
    const i = Math.floor(Math.random() * n);
    let j = Math.floor(Math.random() * n);
    while (j === i) j = Math.floor(Math.random() * n);
    return [i, j];
}

export default function DualTypeQuiz() {
    const [[i, j], setPair] = useState<[number, number]>(randomPair());
    const [showAnswers, setShowAnswers] = useState(false);

    const type1 = typeNames[i];
    const type2 = typeNames[j];

    // 各攻撃タイプ k に対して効果倍率を計算
    const combined = typeNames.map((_, k) =>
        damageMatrix[k][i] * damageMatrix[k][j]
    );
    const super4 = typeNames.filter((_, k) => combined[k] === 4);
    const super2 = typeNames.filter((_, k) => combined[k] === 2);
    const immune = typeNames.filter((_, k) => combined[k] === 0);

    const newQuestion = () => {
        setPair(randomPair());
        setShowAnswers(false);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>複合タイプ相性クイズ</h2>

            <div className={styles.question}>
                <p>
                    対象の複合タイプ：<strong>{type1} / {type2}</strong>
                </p>
                <ul>
                    <li>✔️ 4倍弱点のタイプを答えよ。</li>
                    <li>✔️ 2倍弱点のタイプを答えよ。</li>
                    <li>✔️ 無効（効果なし）のタイプを答えよ。</li>
                </ul>
            </div>

            <div className={styles.buttons}>
                <button onClick={() => setShowAnswers(!showAnswers)}>
                    {showAnswers ? "解答を隠す" : "解答を表示"}
                </button>
                <button onClick={newQuestion}>次の問題</button>
            </div>

            {showAnswers && (
                <div className={styles.answer}>
                    <p>4倍弱点: {super4.length ? super4.join("、") : "なし"}</p>
                    <p>2倍弱点: {super2.length ? super2.join("、") : "なし"}</p>
                    <p>無効: {immune.length ? immune.join("、") : "なし"}</p>
                </div>
            )}
        </div>
    );
}
