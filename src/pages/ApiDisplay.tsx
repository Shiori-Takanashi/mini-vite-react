import { useEffect, useState, useCallback } from "react";
import { DNA } from 'react-loader-spinner';

export const route = "/api-display";
export const label = "API-Display";

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function ApiDisplay() {
    /* -------- state -------- */
    const [speciesName, setSpeciesName] = useState<string | null>(null);
    const [pokemonImgUrl, setImgUrl] = useState<string | null>(null);
    const [isImgLoaded, setImgLoaded] = useState(false);
    const [isLoading, setLoading] = useState(false);


    const allLoad = useCallback(async () => {
        setLoading(true);
        setImgLoaded(false);
        setNameLoaded(null);
        setSpeciesName(null);
        setPokemonImgUrl(null);

        let storagedId = localStrage.getItem("monsterId")
        if (!storagedId) {
            storagedId = getRandomInt(1, 1025).toString();
            localStrage.setItem("monsterId", storagedId)
        }

        /* speciesIdとpokemonIdが違う場合のための拡張の余地を残す */
        const speciesId = parseInt(raw, 10);
        const pokemonId = parseInt(raw, 10);

        const startDate = Date.now();

        await Promise.all([
            (async () => {
                try {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${speciesId}`);
                    const speciesJson = await res.json();
                    const entry = j.names.find((entry: any) => entry.language.name == "ja-Hrkt");
                    const jaName = entry?.name
                    setSpeciesName(jaName ?? "解析失敗");
                } catch {
                    setSpeciesName("取得失敗");
                }
            })(),
            (async () => {
                try {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                    const pokemonJson = await res.json();
                    const imgUrl = pokemonjson.sprites?.other?.["official-artwork"]?.front_default;
                    setPokemonImgUrl(imgUrl ?? "解析失敗")
                } catch {
                    setPokemonImgUrl("取得失敗");
                }
            })(),
        ]);

        const minLoadingTime = 1000 - (Date.now() - startDate);
        setTimeout(() => setLoading(false), Math.max(0, minLoadingTime));
    }, []);

    /* 初回マウント */
    useEffect(() => { allLoad(); }, [load]);

    useEffect(() => {
        // 初回ロード時はlocalStorageから既存のIDを取得
        let idx = localStorage.getItem('pokemonId');
        if (!idx) {
            idx = getRandomInt(1, 1025).toString();
            localStorage.setItem('pokemonId', idx);
        }
        const pokemonId = parseInt(idx);

        loadPokemonData(pokemonId);
    }, []);

    const loadPokemonData = (pokemonId: number) => {
        setIsLoading(true);
        setPokemonName(null);
        setPokemonImageUrl(null);
        setIsPokemonImageLoaded(false);
        setIsNameLoaded(false);

        /* fetch01 - ポケモン名の取得 */
        const fetchPokemonSpecies = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
                const data = await res.json();

                const jaNameEntry = data.names.find(
                    (entry: any) => entry.language.name === "ja-Hrkt"
                );

                setPokemonName(jaNameEntry?.name ?? "(不明)");
                setIsNameLoaded(true);
            } catch (err) {
                console.error(err);
                setPokemonName("(取得失敗)");
                setIsNameLoaded(true);
            }
        };

        /* fetch02 - ポケモン画像の取得 */
        const fetchPokemonImage = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await res.json();

                const imgurl = data.sprites.other["official-artwork"].front_default;

                setPokemonImageUrl(imgurl);
                setIsPokemonImageLoaded(false); // 新しい画像URLがセットされたらfalseにリセット
            } catch (err) {
                console.error(err);
                setPokemonImageUrl(null);
                setIsPokemonImageLoaded(false);
            } finally {
                setIsLoading(false);
            }
        };
        setTimeout(() => {
            fetchPokemonSpecies();
            fetchPokemonImage();
        }, 1000);
    };

    const handleRefresh = () => {
        const newPokemonId = getRandomInt(1, 1025);
        localStorage.setItem('pokemonId', newPokemonId.toString());
        loadPokemonData(newPokemonId);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        }}>
            <div style={{
                width: "300px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
            }}>
                {pokemonName && isPokemonImageLoaded && isNameLoaded && (
                    <h1 style={{
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: 0,
                    }}>
                        {pokemonName}
                    </h1>
                )}
            </div>
            <div style={{
                width: "400px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EDEDED",
                borderRadius: "24px"
            }}>
                {pokemonImageUrl ?
                    <img
                        src={pokemonImageUrl}
                        alt="Pokemon"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }}
                        onLoad={() => setIsPokemonImageLoaded(true)}
                        onError={() => setIsPokemonImageLoaded(false)}
                    />
                    :
                    <DNA height="200" width="200" />
                }
            </div>
            <button
                onClick={handleRefresh}
                disabled={isLoading}
                style={{
                    height: "60px",
                    width: "120px",
                    marginTop: "20px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    backgroundColor: isLoading ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {isLoading ? "更新中" : "更新"}
            </button>
        </div>
    );
}
