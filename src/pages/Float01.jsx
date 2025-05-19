export const route = '/float01';
export const label = 'Float-01';
export const infotext =
    "containerの中に、左のカラムと右のカラムをfloatで配置しています。\n" +
    "containerには背景色で赤を設定しています。\n" +
    "しかし、floatを使うと、containerの高さが自動で調整されません。\n" +
    "今回は高さを指定していないので、height:0;となり、背景色が見えません。";

const Float01 = () => {
    return (
        <>
            <style>{`


.container {
  width: 80vw;
  margin: 0 auto;
  background: gray;
  user-select: none;
}

.left {
  float: left;
  width: 60%;
  background: lightblue;
}

.right {
  float: right;
  width: 35%;
  background: lightgreen;
}
`}</style>
            <div className="whole">
                <div className="container">
                    <div className="left">
                        <p>
                            左側のカラム<br />
                            左側のカラム<br />
                            左側のカラム<br />
                            左側のカラム<br />
                        </p>
                    </div>
                    <div className="right">
                        右側のカラム<br />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Float01;
