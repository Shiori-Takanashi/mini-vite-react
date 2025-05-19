export const route = '/float02';
export const label = 'Float-02';
export const infoText =
    "本体に説明があるとおりですが、\n" +
    "画像を左にフロートし、その周囲をテキストが回り込む基本例です。\n" +
    "本来、メディア要素の周りにテキストを流し込むための機能ですが、\n" +
    "現在ではFlexboxやGridなどのモダンなレイアウト手法が推奨されます。\n";

const Float02 = () => {
    return (
        <>
            <style>{`
.container {
  width: 80vw;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ccc;
  user-select: none;
  overflow: auto; /* clearfixハックの代わり */
}

.image-placeholder {
  float: left;
  width: 150px;
  height: 150px;
  background: lightcoral;
  margin-right: 15px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.text-content p {
  margin-top: 0;
  line-height: 1.6;
}
`}</style>
            <div className="container">
                <div className="image-placeholder">
                    <span>ダミー画像</span>
                </div>
                <div className="text-content">
                    <p>
                        この例では、左側の画像に <code>float: left;</code> を適用し、その周囲にテキストが回り込む動作を示しています。
                        十分な量のテキストを配置することで、画像の右側および下部にしっかりと回り込みが発生します。
                    </p>
                    <p>
                        フロートされた要素は通常のドキュメントフローから外れるため、
                        親コンテナに <code>overflow: auto;</code> を指定しないと高さが認識されず、レイアウトが崩れます。
                        本例では clearfix ハックの代替としてこの手法を用いています。
                    </p>
                    <p>
                        画像とテキストの間隔は <code>margin-right</code> や <code>margin-bottom</code> で簡単に調整可能です。
                        適切な余白を設定することで、テキストが画像に重なったり詰まったりせず、読みやすさが向上します。
                    </p>
                    <p>
                        必要に応じて <code>clear</code> プロパティや clearfix ハックを併用すると、
                        フロートされた要素の後続要素を確実に下に配置でき、さらなるレイアウト崩れを防止できます。
                    </p>
                    <p>
                        ただしフロートはあくまでレガシーな手法であり、
                        要素の配置や並び順を直感的に制御できる Flexbox や Grid レイアウトの利用が現在では推奨されています。
                    </p>
                    <p>
                        レスポンシブ対応の際にはメディアクエリで float の挙動を制御するか、
                        レイアウト手法自体を切り替えることをご検討ください。
                    </p>
                </div>
            </div>
        </>
    );
};

export default Float02;
