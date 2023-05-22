export const Practice1 = () => {
  // calcTotalfee 数値を受け取り税率をかけ、合計の数値をコンソールにだすような関数
  //(num: number)としておくことで、数字しか受け取らないようにする。引数が数字以外ならエラー
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  //ボタンが押されたとき、calcTotalFeeを実行
  //calcTotalFeeの中に("1000")という文字列を入れたとしても、javascriptが勝手に数字として計算。
  //しかし、(便利ではあるが)ガバガバなため上で引数は数値のみに指定するようにnumber型を使用。
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
