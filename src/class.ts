import { join } from "path"

{
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 

class Position{
  constructor(
    private file: File,
    private rank: Rank
  ){}
  distanceFrom(position: Position){
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}
class Piece{
  protected position: Position
  // constructorの()内はインスタンス化する時の引数、{}内はその引数による初期化の処理＝普通はthis.name = name;など
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ){
    // Positionは新しいfileとrankを返してくれる
    // この{}の中で、positionという新しいプロパティを生成してくれる
    this.position = new Position(file, rank)
  }
}
// Pieceはthis.positionしか初期化していないので、this.positionまたは、methodのthis.canMoveToしか使えない
class King extends Piece{
  canMoveTo(position: Position){
    // rankとfileがdistanceに格納される
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}
class Queen extends Piece{}
class Bishop extends Piece{}
class Knight extends Piece{}
class Rook extends Piece{}
class Pawn extends Piece{}

// ゲーム開始時に配置する
class Game{
  private pieces = Game.makePieces()
  private static makePieces(){
    return [
      // King
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      // Queen
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),
      
      // Bishop
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),
    ]
  }
}

class Set{
  has(value: number): any{
    //...
  }
  // 返り値をthisにしておくことで、オーバーライド（継承）する時ももう一度定義し直す必要はない
  add(value: number): any{
    //...
  }
}
class MutableSet extends Set{
  delete(value: number): any{
    // ...
  }
}

}
// インターフェース
{
type Sushi = {
  calories: number
  salty: boolean
  tasty: boolean
}
// 上をインターフェースを使って書き直す
interface Sushi1{
  calories: number
  salty: boolean
  tasty: boolean
}

}

{
type Food = {
  calories: number
  tasty: boolean
}
type Sushi = Food & {
  salty: boolean
}
type Cake = Food & {
  sweet: boolean
}
// 上をインターフェースで書き直す
interface Food1{
  calories: number
  tasty: boolean
}
interface Sushi1 extends Food1{
  salty: boolean
}
interface Cake1 extends Food1{
  sweet: boolean
}
}

{
// インターフェースではなく、型エイリアスで同じ名前を使うとエラーになる
interface User{
  name: string
}
interface User{
  age: number
}

interface Animal{
  eat(food: string): void
  sleep(hours: number): void
}
// implementsにより、特定のインターフェースを全て満たしている必要がある
class Cat implements Animal{
  eat(food: string){
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number){
    console.info('Slept for', hours, 'hours')
  }
}
}

{
interface Animal{
  readonly name: string // nameはプロパティ
  eat(food: string): void // eatはメソッドを表す
  sleep(hours: number): void
}
interface Feline{
  meow(): void
}
class Cat implements Animal, Feline{
  name = 'Whiskers'
  eat(food: string){
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number){
    console.info('Slept for', hours, 'hours')
  }
  meow(){
    console.info('Meow')
  }
}
const cat = new Cat()
cat.meow();
cat.eat('meat')
cat.sleep(7)
console.log(cat)
}

{
class C{}
let c: C  // CはCクラスのインスタンス
  = new C // Cは値であるC
enum E {F, G} // Eは列挙型Eの型
let e: E = E.F // Eは値であるE

type State = {
  [key: string]: string
}
// class StringDatabase{
//   state: State = []
//   get(key: string): string | null {
//     return key in this.state ? this.state[key]: null
//   }
//   set(key: string, value: string): void{
//     this.state[key] = value
//   }
//   static from (state: State){
//     let db = new StringDatabase
//     for (let key in state){
//       db.set(key, state[key])
//     }
//     return db
//   }
}
// interface StringDatabase{
//   state: State
//   get(key: string): string | null
//   set(key: string, value: string): void 
// }
// interface StringDatabaseConstructor{
//   new(): StringDatabase
//   from (state: State): StringDatabase
// }
// }

{
// class MyMap<K, V>{
//   constructor(initialKey: K, initialValue: V){
//     //...
//   }
//   get(key: K){
//     //..
//   }
//   set(key: K, value: V): void{
//     //...
//   }
//   merge<K1, V1>(map: MyMap<K1, V1>):MyMap<K | K1, V | V1>{
//     // ...
//   }
//   static of<K, V>(k: K, v: V): MyMap<K, V>{
//     //...
//   }
// }

}

{
// 任意の型の任意の引数を取る
type ClassConstructor = new(...args: any[]) => {}
// Cはジェネリクス型
function withEZDebug<C extends ClassConstructor>(Class: C){
  return class extends Class{
    constructor(...args: any[]){
      super(...args)
    }
  }
}
}

{
// 任意の型の任意の引数を取る
type ClassConstructor = new (...args: any[]) => {}
// Cはジェネリクス型
function withEZDebug<C extends ClassConstructor>(Class: C){
  return class extends Class {
    constructor(...args: any[]) {
        super(...args) //clのコンストラクター呼出し
    }
}
}
type Constructor = new (...args: any[]) => {}
}

{
class MessageQueue{
  private constructor(private message: string[]){}
  static create(message:string[]){
    return new MessageQueue(message)
  }
}
// private constructor はオーバーライド不可
// class BadQueue extends MessageQueue
console.log(MessageQueue.create([]));

type Shoe = {
  purpose: string
}
class BalletFlat implements Shoe{
  purpose = 'dancing'
}
class Boot implements Shoe{
  purpose = 'woodcutting'
}
class Sneaker implements Shoe{
  purpose = 'walking'
}
let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe{
    switch(type){
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}



}

{
class RequestBuilder{
  private data: object |null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null
  
  setMethod(method: 'get' | 'post'): this{
    this.method = method
    return this
  }
  setData(data: object): this{
    this.data = data
    return this
  }
  setURL(url: string):this{
    this.url = url
    return this
  }
  send(){
    // ...
  }
}
new RequestBuilder()
  .setURL('/users')
  .setMethod('get')
  .setData({firstName: 'Anna'})
  .send()




}