{
function greet(name: string){
  return 'hello'+ name;
}
let greet2 = function(name: string){
  return 'hello' + name;
}
let greet3 = ((name: string) => {
  return 'hello' + name
})
let greet4 = (name: string) => 
  'hello' + name

let greet5 = new Function('name', 'return "hello " + name');
}

{
function log(message: string, userId?: string){
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in'); // UserIdに入力がなかった場合も用意しておく, 実際はデフォルトパラメータを使った方が良い
}
log('Page loaded');
log('User signed in', 'da763be')
function log2(message: string, userId = 'Not signed in'){
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in'); // UserIdに入力がなかった場合も用意しておく
}

type Context = {
  appId?: string,
  userId?: string
}
function log3(message: string, context: Context = {}){
  let time = new Date().toLocaleTimeString()
  console.log(time, message, context.userId);
}
function sum(numbers: number[]){
  return numbers.reduce((total, n) => {
    return total + n
  }, 0)
}
console.log(sum([1, 2, 3]));
// レストパラメータを使う方法
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadicSafe(1, 2, 3));
}

{
function add (a: number, b: number):number{
  return a + b;
}
add.apply(null, [10, 23]);
add.call(null, 10, 23);
add.bind(null, 10, 23)();

function fancyDate(this: Date){
  return `${this.getMonth()+1}/${this.getDate()}/${this.getFullYear()}`
}
console.log(fancyDate.call(new Date));
}

{
// ジェネレーター関数
function* createFibonacciGenerator(){
  let a = 0;
  let b = 1;
  while(true){
    yield a;
    [a, b] = [b, a + b];
  }
}
let fibonacciGenerator = createFibonacciGenerator()
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
console.log(fibonacciGenerator.next());

function* createNumbers(): Generator<number>{
  let n = 0;
  while(1){
    yield n++;
  }
}
let numbers = createNumbers();
numbers.next();
numbers.next();
numbers.next();
numbers.next();
numbers.next();
numbers.next();
console.log(numbers.next());
}

{
let numbers = {
  *[Symbol.iterator](){
    for (let n = 1; n <= 10; n++){
      yield n;
    }
  }
}
console.log(numbers);
for (let a of numbers){
  console.log(a);
}
let [one, two, ...rest] = numbers;
let allNumbers = [...numbers];
console.log(rest);
console.log(allNumbers);
}

{
type Log = (message: string, userId?: string) => void;
let log: Log = (
  message, 
  userId = 'Not signed in'
) => {
  let time = new Date().toISOString()
  console.log(time, message, userId);
}
// timesは第一引数にコールバック関数を取る
function times(
  f:(index: number) => void,
  n: number
){
  for (let i = 0; i < n; i++){
    f(i)
  }
}
times(n => console.log(n), 10);
}

{
type Reserve = {
  (from: Date, to: Date, destination: string): any
  (from: Date, destination: string): any
}
let reserve: Reserve = (
  from: Date, 
  toOrDestination: Date | string, 
  destination?: string
  ) => {
  if (toOrDestination instanceof Date && destination !== undefined){
    // 宿泊旅行を予約する
  }else if (typeof toOrDestination === 'string'){
    // 日帰り旅行を予約する
  }
}
}
{
type CreateElement = {
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: 'table'): HTMLTableElement
}
}

{
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}
function map<T, U>(array: T[], f: (item: T) => U): U[]{
  let results = []
  for (let i = 0; i < array.length; i++){
    results[i] = f(array[i])
  }
  return results
}
}

{
// ジェネリック
type MyEvent<T> = {
  target: T
  type: string
}
type TimeEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}
function triggerEvent<T>(event: MyEvent<T>): void{
  //...
}
triggerEvent({
  target: document.querySelector('#myButton'),
  type : 'mouseover'
})
}

{
type TreeNode = {
  value: string
}
type LeafNode = TreeNode & {
  isLeaf: true
}
type InnerNode = TreeNode & {
  childlen: [TreeNode] | [TreeNode, TreeNode]
}
let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', childlen: [b]}
let a1 = mapNode(a, _ => _.toUpperCase())
let b1 = mapNode(b, _ => _.toUpperCase())
let c1 = mapNode(c, _ => _.toUpperCase())
function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string
): T{
  return {
    ...node,
    value: f(node.value)
  }
}
}

{
function call<T extends unknown[], R>(
  f:(...args: T) => R,
  ...args: T
): R{
  return f(...args)
}
}