"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const node_fetch_1 = require("node-fetch");
{
    class Person {
        constructor(name) {
            this.age = 3;
            this.name = name;
        }
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        }
    }
    let villagerA;
    let heroA;
    villagerA = new Person('村人A');
    heroA = new Person('勇者A');
}
{
    const esp = {
        1: "uno",
        2: "dos",
        3: "tres"
    };
    esp[10] = "diez";
    console.log(esp[1]);
    console.log(esp[4]);
    console.log(esp[10]);
}
{
    // 抽象クラス（abstractメソッド)
    class A {
        baz() {
            console.log('baz');
        }
    }
    // 抽象クラスを使うには、クラスの継承のようにextendsの後に置くだけ
    // abstract修飾子をつけて宣言したものは、継承先で必ず実装しなければいけない
    class AA extends A {
        constructor() {
            super(...arguments);
            this.foo = 'foo';
        }
        bar() {
            return 'bar';
        }
    }
    const aa = new AA();
    aa.baz();
    console.log(aa.bar());
    // 抽象クラスの継承
    class BB extends A {
        constructor() {
            super(...arguments);
            this.foo = 'foo';
        }
    }
    class AAA extends BB {
        constructor() {
            super(...arguments);
            this.qux = 'qux';
        }
        bar() {
            return 'bar';
        }
    }
    const b = new AAA();
    console.log(b.qux);
}
{
    const jump = {
        page: 100,
        title: 'kimetsu',
        cycle: 'daily'
    };
    class Comic {
        // publishYearは他の関数に継承したりしないので、privateをつける
        constructor(page, tittle, pulishYear) {
            this.pulishYear = pulishYear;
            // この二つは上でプロパティになっているから、こうする必要がある
            this.page = page;
            this.title = process_1.title;
            // これは特に必要ない
            this.pulishYear = pulishYear;
        }
        getPublishYear() {
            return this.title + 'が発売されたのは' + this.pulishYear + '年です。';
        }
    }
    class Manga extends Comic {
        constructor(page, title) {
            super(100, 'fps', '2203');
        }
    }
}
// コールバック関数だけで書く場合（非同期処理が原因で順番が思った通りに行かない）
{
    const url = 'https://api.github.com/users/tak-ka3';
    const fetchProfileCallback = () => {
        fetch.default(url)
            .then((res) => {
            res
                .json()
                .then((json) => {
                console.log('Asynchronous Callback Sample 1:', json);
                return json;
            })
                .catch((error) => {
                console.error(error);
                return null;
            });
        })
            .catch((error) => {
            console.error(error);
            return null;
        });
    };
    const profile = fetchProfileCallback();
    // 非同期処理が完了していないのでPromise<pending>が表示される
    // つまり本来この処理は非同期処理が終わってからやるようにしなければいけない
    console.log('Asynchronous Callback Sample 2:', profile);
}
//# sourceMappingURL=prac.js.map