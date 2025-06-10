// convertTypeChart.ts
type TypeEffect = {
    "attack-type": string;
    "relation": {
        "defence-type": string;
        "effect": number;
    }[];
};

type TypeChart = {
    typeNames: string[];
    damageMatrix: number[][];
};

export function convertToMatrix(data: TypeEffect[]): TypeChart {
    const typeNames = [
        "普", "炎", "水", "電", "草", "氷", "闘", "毒", "地",
        "飛", "超", "虫", "岩", "霊", "竜", "悪", "鋼", "妖"
    ];

    const n = typeNames.length;
    const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(1));

    for (const entry of data) {
        const attackerIdx = typeNames.indexOf(entry["attack-type"]);
        if (attackerIdx === -1) continue;

        for (const effect of entry.relation) {
            const defenderIdx = typeNames.indexOf(effect["defence-type"]);
            if (defenderIdx === -1) continue;
            matrix[attackerIdx][defenderIdx] = effect["effect"]; // ← 修正
        }
    }



    return { typeNames, damageMatrix: matrix };
}
