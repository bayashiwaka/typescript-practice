export const Practice2 = () => {
  //(num: number)のあとに、:をつけ返却値の型を書く。
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  //自動で型の推論が行われるため、上で返却値の型指定をせずともnumberだと察してくれるが、
  //number型と指定することで、仮にtotalを（tostringメソッドなどで）文字列として返そうとした際などに
  //エラーが出てくれるので他のプロジェクトメンバーにもわかりやすくやさしい。
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
