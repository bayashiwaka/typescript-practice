//** TypeScriptの基本の型 */

//boolean　真（true）か偽（false）のどちらかの値が入る変数の型
//従来の書き方
let bool = true;

//型をつける場合は変数名のあとにコロン
let bool: boolean = true;

//number 数値の変数
let num: number = 0;

//string 文字
let str: string = "ABCD";

//Array 配列　二通りの指定の仕方
//1　Arrayのあとに何の配列か指定
let arr1: Array<number> = [0, 1, 2];
//2
let arr2: number[] = [0, 1, 2];

// tuple型 複数の要素を順番に並べて一つの要素として扱うことを指す
let tuple: [number, string] = [0, "A"];

//any型 どんな型でも入れられる。開発ではなるべく使わない方がいいらしい
let any1: any = false;

//void型　関数に紐づく型 何も返却値がないことを表す型 :voidで何も返却してないことをあらわす
const funcA = (): void => {
  const test = "Test";
};

//null型　値がないことを示す値
let null1: null = null;

//undifined型　変数に値がセットされていないとき、戻り値が無い関数、オブジェクトに存在しないプロパティにアクセスしたとき、配列に存在しないインデックスでアクセスしたときなどに現れるらしい。
let undefined1: undefined = undefined;

//object型 (object:操作の対象となっているデータ)　あんまり使わない（らしい）
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
// オブジェクトのそれぞれのプロパティの型を指定→その要素がないときにエラーをだしてくれる
