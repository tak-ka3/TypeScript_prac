{
let a: {
  b: number,
  c?: string
  [key: number]: boolean
}
a = {b: 1}
a = {b: 1, c: undefined}
a = {b: 1, c: 'd'}
a = {b: 1, 10: true}
a = {b: 1, 10: true, 20: false}

console.log(a);
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  '34D':'Boris Cherny',
  '34E': 'Bill Gates'
}
let user: {
  readonly firstName: string
} = {
  firstName: 'abby'
}
console.log(user.firstName);
// readonly修飾子をつけたので、別の値を代入したりはできない
}
{
type Age = number;
type Person = {
  name: string, 
  age: Age
}
let age: Age = 54;
let driver: Person = {
  name: 'James May',
  age: age
}
type Color = 'red';
let x = Math.random() < .5
if (x){
  type Color = 'blue';
  let b: Color = 'blue';
}else{
  let c: Color = 'red';
}
}

{
type Cat = {name: string, purrs: boolean};
type Dog = {name: string, barks: boolean, wags: boolean};
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;
// このように両方の和集合の中のどの要素も取ることができる
let a: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true,
  barks: true
}
// 両方の要素が全て含まれる必要がある
let b: CatAndDog = {
  name: 'Domino',
  barks: true,
  purrs: false,
  wags: true
}
function trueOrNull(isTrue: boolean){
  if(isTrue){
    return 'true'
  }
  return null;
}
}

{
let e: (number | string)[] = [2, 'b'];
let d = [1, 'a'];
d.map(_ => {
  if(typeof _ === 'number'){
    return _ * 3
  }
  else{
    return _.toUpperCase();
  }
})
console.log(d);
}
{
let a: [number] = [1]
// このようにタプルは最初に明示的に型付けされる
let b: [string, string, number] = ['melcolm', 'gladwell', 1963];
// b = ['queen', 'elizabeth', 'ii', 1926] このような存在しない要素に関する代入はできない

let trainFares: [number, number?][] = [
  [3.75],
  [8.25, 7.70],
  [10.50]
]
let moreTrainFares: ([number, number])[] = [
  // 
]
let friends: [string, ...string[]] = ['Sara', 'Ken', 'Mei']
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

let as: readonly number[] = [1, 2, 3]
let bs: readonly number[] = as.concat(4) // 4を最後に付け加えてタプルを返す
console.log(bs)
type A = readonly string[];
type B = ReadonlyArray<string>;
type D = readonly [number, string];
}
{
function a(x: number){
  if (x < 10){
    return x;
  }
  return null;
}
function b(){
  return undefined;
}
function d(){
  throw TypeError('I always error');
}
// 終わらないので、返り値はnever
function e(){
  while(true){
  }
}
console.log(a(11));
console.log(b());
// console.log(d());
}

{
enum Language{
  English = 0,
  Spanish = 1,
  Russian = 2
}
console.log(Language.Spanish);
}
{
const enum Language{
  English,
  Spanish,
  Russian
}
let a = Language.English
// let b = Language.Tagalog これはエラー！
// let c = Language[0] 列挙型は文字リテラルでしかアクセスできないからエラー！
const enum Flippable{
  Burger,
  Chair, 
  Cup, 
  Skateboard,
  Table
}
function flip(f:Flippable){
  return 'flipped it'
}
flip(Flippable.Chair);
flip(12); // これでもエラーが出ない！
// これを防ぐために、最初から文字列の値をFlippableを定義する段階で代入するべき！
}