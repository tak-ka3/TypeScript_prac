import { title } from "process";
import fetch from 'node-fetch';
import { rejects } from "assert";
import { profile } from "console";

{
// インターフェース
// インターフェースは抽象クラスと少し似てるが、それぞれ特徴があり、抽象クラスは
// 共通になりそうな部分はプロパティ値を入れたりメソッドを実装した状態で用意できる。
// その一方で、インターフェースは二つ以上のインターフェースを継承させる多重継承をすることができる
interface Greetable{
  name: string;
  greet(phrase: string): void;
}
class Person implements Greetable{
  name: string;
  age = 3;
  constructor(name: string){
    this.name = name;
  }
  greet (phrase: string){
    console.log(phrase + ' ' + this.name);
  }
}
let villagerA: Greetable;
let heroA: Greetable;

villagerA = new Person('村人A');
heroA = new Person('勇者A')
}

{
interface numInSpanish{
  [key: number]: string;
}
const esp: numInSpanish = {
  1: "uno",
  2: "dos",
  3: "tres"
}
esp[10] = "diez"
console.log(esp[1])
console.log(esp[4])
console.log(esp[10]);

}

{
// 抽象クラス（abstractメソッド)
abstract class A {
  // 後で！
  abstract foo: string;
  // 後で！
  abstract bar(): string;

  baz(): void{
    console.log('baz')
  }
}
// 抽象クラスを使うには、クラスの継承のようにextendsの後に置くだけ
// abstract修飾子をつけて宣言したものは、継承先で必ず実装しなければいけない
class AA extends A {
  foo = 'foo';
  bar(){
    return 'bar'
  }
}
const aa = new AA();
aa.baz();
console.log(aa.bar());
// 抽象クラスの継承
abstract class BB extends A{
  foo = 'foo';
  abstract qux: string;
}
class AAA extends BB {
  bar(){
    return 'bar';
  }
  qux = 'qux';
}
const b = new AAA();
console.log(b.qux);
}

{
interface Book{
  page: number
  title: string
}
interface Magazine extends Book{
  cycle: 'daily' | 'monthly' | 'yearly'
}
const jump: Magazine = {
  page: 100,
  title: 'kimetsu',
  cycle:'daily'
}

class Comic implements Book{
  // ComicはBookを継承しているので、pageとtitleのプロパティは必ず必要
  page: number
  title: string

  // publishYearは他の関数に継承したりしないので、privateをつける
  constructor(page: number, tittle: string, private pulishYear: string){
    // この二つは上でプロパティになっているから、こうする必要がある
    this.page = page
    this.title = title
    // これは特に必要ない
    this.pulishYear = pulishYear
  }
  getPublishYear(){
    return this.title + 'が発売されたのは'+ this.pulishYear + '年です。'
  }
}

class Manga extends Comic{
  constructor(page: number, title: string){
    super(100, 'fps', '2203')
  }
}

}

// コールバック関数だけで書く場合（非同期処理が原因で順番が思った通りに行かない）
{
const url = 'https://api.github.com/users/tak-ka3'
type Profile = {
  login: string
  id: number
}
type FetchProfile = () => void

const fetchProfileCallback: FetchProfile = () => {
  fetch(url)
    .then((res) => {
      res
        .json()
        .then((json: Profile) => {
          console.log('Asynchronous Callback Sample 1:', json)
          return json
        })
        .catch((error) => {
          console.error(error)
          return null
        })
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}
const profile = fetchProfileCallback()
// 非同期処理が完了していないのでPromise<pending>が表示される
// つまり本来この処理は非同期処理が終わってからやるようにしなければいけない
console.log('Asynchronous Callback Sample 2:', profile)



}

{
const url = 'https://api.github.com/users/tak-ka3'
type Profile = {
  login: string
  id: number
}
type FetchProfile = () => Promise<Profile | null>

const fetchProfilePromise: FetchProfile = () => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((json: Profile) => {
            console.log('Asynchronous 1:', json)
            resolve(json)
          })
          .catch((error) => {
            console.error(error)
            reject(null)
          })
      })
      .catch((error) => {
        console.error(error)
        reject(null)
      })
  })
}
fetchProfilePromise().then((profile: Profile| null) => {
  if (profile){
    console.log('Asynchronous 2', profile)
  }
})

const fetchProfile: FetchProfile = async () => {
  const response = await fetch(url)
    .then((response) => response)
    .catch((error) => {
      console.error(error)
      return null
    })

    if (!response){
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous 1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })
    if (!json){
      return null
    }
    return json
}
fetchProfile().then((profile: Profile | null) => {
  if (profile){
    console.log('Asynchronous 2:', profile)
  }
})
// 本来このトップレベルの関数などにasyncをつけるべきだが、つけてないので、
// 下のfetchProfile()にawaitをつけることができず、非同期的な処理がされる
// つまり先に実行される
const profile = fetchProfile()
if (profile){
  console.log('Asynchronous 3:', profile)
}


}