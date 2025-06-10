export type TypeEffect = {
    "attack-type": string;
    "relation": {
        "defence-type": string;
        "effect": number;
    }[];
};

// ↓ export const で配列を提供
export const typeChart: TypeEffect[] = [
    {
        "attack-type": "普",
        "relation": [
            { "defence-type": "霊", "effect": 0 },
            { "defence-type": "岩", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "炎",
        "relation": [
            { "defence-type": "草", "effect": 2 },
            { "defence-type": "氷", "effect": 2 },
            { "defence-type": "虫", "effect": 2 },
            { "defence-type": "鋼", "effect": 2 },
            { "defence-type": "炎", "effect": 0.5 },
            { "defence-type": "水", "effect": 0.5 },
            { "defence-type": "岩", "effect": 0.5 },
            { "defence-type": "竜", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "水",
        "relation": [
            { "defence-type": "炎", "effect": 2 },
            { "defence-type": "地", "effect": 2 },
            { "defence-type": "岩", "effect": 2 },
            { "defence-type": "水", "effect": 0.5 },
            { "defence-type": "草", "effect": 0.5 },
            { "defence-type": "竜", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "電",
        "relation": [
            { "defence-type": "水", "effect": 2 },
            { "defence-type": "飛", "effect": 2 },
            { "defence-type": "電", "effect": 0.5 },
            { "defence-type": "草", "effect": 0.5 },
            { "defence-type": "竜", "effect": 0.5 },
            { "defence-type": "地", "effect": 0 }
        ]
    },
    {
        "attack-type": "草",
        "relation": [
            { "defence-type": "水", "effect": 2 },
            { "defence-type": "地", "effect": 2 },
            { "defence-type": "岩", "effect": 2 },
            { "defence-type": "炎", "effect": 0.5 },
            { "defence-type": "草", "effect": 0.5 },
            { "defence-type": "毒", "effect": 0.5 },
            { "defence-type": "飛", "effect": 0.5 },
            { "defence-type": "虫", "effect": 0.5 },
            { "defence-type": "竜", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "氷",
        "relation": [
            { "defence-type": "草", "effect": 2 },
            { "defence-type": "地", "effect": 2 },
            { "defence-type": "飛", "effect": 2 },
            { "defence-type": "竜", "effect": 2 },
            { "defence-type": "炎", "effect": 0.5 },
            { "defence-type": "水", "effect": 0.5 },
            { "defence-type": "氷", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "闘",
        "relation": [
            { "defence-type": "普", "effect": 2 },
            { "defence-type": "氷", "effect": 2 },
            { "defence-type": "岩", "effect": 2 },
            { "defence-type": "悪", "effect": 2 },
            { "defence-type": "鋼", "effect": 2 },
            { "defence-type": "毒", "effect": 0.5 },
            { "defence-type": "飛", "effect": 0.5 },
            { "defence-type": "虫", "effect": 0.5 },
            { "defence-type": "超", "effect": 0.5 },
            { "defence-type": "霊", "effect": 0 }
        ]
    },
    {
        "attack-type": "毒",
        "relation": [
            { "defence-type": "草", "effect": 2 },
            { "defence-type": "妖", "effect": 2 },
            { "defence-type": "毒", "effect": 0.5 },
            { "defence-type": "地", "effect": 0.5 },
            { "defence-type": "岩", "effect": 0.5 },
            { "defence-type": "霊", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0 }
        ]
    },
    {
        "attack-type": "地",
        "relation": [
            { "defence-type": "炎", "effect": 2 },
            { "defence-type": "電", "effect": 2 },
            { "defence-type": "毒", "effect": 2 },
            { "defence-type": "岩", "effect": 2 },
            { "defence-type": "鋼", "effect": 2 },
            { "defence-type": "草", "effect": 0.5 },
            { "defence-type": "虫", "effect": 0.5 },
            { "defence-type": "飛", "effect": 0 }
        ]
    },
    {
        "attack-type": "飛",
        "relation": [
            { "defence-type": "草", "effect": 2 },
            { "defence-type": "闘", "effect": 2 },
            { "defence-type": "虫", "effect": 2 },
            { "defence-type": "電", "effect": 0.5 },
            { "defence-type": "岩", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "超",
        "relation": [
            { "defence-type": "闘", "effect": 2 },
            { "defence-type": "毒", "effect": 2 },
            { "defence-type": "超", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 },
            { "defence-type": "悪", "effect": 0 }
        ]
    },
    {
        "attack-type": "虫",
        "relation": [
            { "defence-type": "草", "effect": 2 },
            { "defence-type": "超", "effect": 2 },
            { "defence-type": "悪", "effect": 2 },
            { "defence-type": "炎", "effect": 0.5 },
            { "defence-type": "闘", "effect": 0.5 },
            { "defence-type": "毒", "effect": 0.5 },
            { "defence-type": "飛", "effect": 0.5 },
            { "defence-type": "霊", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 },
            { "defence-type": "妖", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "岩",
        "relation": [
            { "defence-type": "炎", "effect": 2 },
            { "defence-type": "氷", "effect": 2 },
            { "defence-type": "飛", "effect": 2 },
            { "defence-type": "虫", "effect": 2 },
            { "defence-type": "闘", "effect": 0.5 },
            { "defence-type": "地", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "霊",
        "relation": [
            { "defence-type": "霊", "effect": 2 },
            { "defence-type": "超", "effect": 2 },
            { "defence-type": "悪", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 },
            { "defence-type": "普", "effect": 0 }
        ]
    },
    {
        "attack-type": "竜",
        "relation": [
            { "defence-type": "竜", "effect": 2 },
            { "defence-type": "鋼", "effect": 0.5 },
            { "defence-type": "妖", "effect": 0 }
        ]
    },
    {
        "attack-type": "悪",
        "relation": [
            { "defence-type": "超", "effect": 2 },
            { "defence-type": "霊", "effect": 2 },
            { "defence-type": "闘", "effect": 0.5 },
            { "defence-type": "悪", "effect": 0.5 },
            { "defence-type": "妖", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "鋼",
        "relation": [
            { "defence-type": "氷", "effect": 2 },
            { "defence-type": "岩", "effect": 2 },
            { "defence-type": "妖", "effect": 2 },
            { "defence-type": "炎", "effect": 0.5 },
            { "defence-type": "水", "effect": 0.5 },
            { "defence-type": "電", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    },
    {
        "attack-type": "妖",
        "relation": [
            { "defence-type": "闘", "effect": 2 },
            { "defence-type": "竜", "effect": 2 },
            { "defence-type": "悪", "effect": 2 },
            { "defence-type": "炎", "effect": 0.5 },
            { "defence-type": "毒", "effect": 0.5 },
            { "defence-type": "鋼", "effect": 0.5 }
        ]
    }
];
