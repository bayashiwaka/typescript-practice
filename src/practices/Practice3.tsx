export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };

  const onClickPractice = () => {
    //今回は、返却値ではなく変数の型を指定している。
    let total: number = 0;
    //totalは数字のはずだから、(上でtoStringメソッドによって文字列にしようとしても)
    //文字は返せませんよ、というエラーがでている。
    //変数の型を指定したおかげで、かえってくる値がなにかわかりやすい
    //=可読性が高く、より安全なアプリケーションが作成可能。
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
