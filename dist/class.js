"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    class Position {
        constructor(file, rank) {
            this.file = file;
            this.rank = rank;
        }
        distanceFrom(position) {
            return {
                rank: Math.abs(position.rank - this.rank),
                file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
            };
        }
    }
    class Piece {
        // constructorの()内はインスタンス化する時の引数、{}内はその引数による初期化の処理＝普通はthis.name = name;など
        constructor(color, file, rank) {
            this.color = color;
            // Positionは新しいfileとrankを返してくれる
            // この{}の中で、positionという新しいプロパティを生成してくれる
            this.position = new Position(file, rank);
        }
    }
    // Pieceはthis.positionしか初期化していないので、this.positionまたは、methodのthis.canMoveToしか使えない
    class King extends Piece {
        canMoveTo(position) {
            // rankとfileがdistanceに格納される
            let distance = this.position.distanceFrom(position);
            return distance.rank < 2 && distance.file < 2;
        }
    }
    class Queen extends Piece {
    }
    class Bishop extends Piece {
    }
    class Knight extends Piece {
    }
    class Rook extends Piece {
    }
    class Pawn extends Piece {
    }
    // ゲーム開始時に配置する
    class Game {
        constructor() {
            this.pieces = Game.makePieces();
        }
        static makePieces() {
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
            ];
        }
    }
    class Set {
        has(value) {
            //...
        }
        // 返り値をthisにしておくことで、オーバーライド（継承）する時ももう一度定義し直す必要はない
        add(value) {
            //...
        }
    }
    class MutableSet extends Set {
        delete(value) {
            // ...
        }
    }
}
// インターフェース
{
}
{
}
{
    // implementsにより、特定のインターフェースを全て満たしている必要がある
    class Cat {
        eat(food) {
            console.info('Ate some', food, '. Mmm!');
        }
        sleep(hours) {
            console.info('Slept for', hours, 'hours');
        }
    }
}
{
    class Cat {
        constructor() {
            this.name = 'Whiskers';
        }
        eat(food) {
            console.info('Ate some', food, '. Mmm!');
        }
        sleep(hours) {
            console.info('Slept for', hours, 'hours');
        }
        meow() {
            console.info('Meow');
        }
    }
    const cat = new Cat();
    cat.meow();
    cat.eat('meat');
    cat.sleep(7);
    console.log(cat);
}
{
    class C {
    }
    let c = new C; // Cは値であるC
    let E;
    (function (E) {
        E[E["F"] = 0] = "F";
        E[E["G"] = 1] = "G";
    })(E || (E = {})); // Eは列挙型Eの型
    let e = E.F; // Eは値であるE
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
    // Cはジェネリクス型
    function withEZDebug(Class) {
        return class extends Class {
            constructor(...args) {
                super(...args);
            }
        };
    }
}
{
    // Cはジェネリクス型
    function withEZDebug(Class) {
        return class extends Class {
            constructor(...args) {
                super(...args); //clのコンストラクター呼出し
            }
        };
    }
}
{
    class MessageQueue {
        constructor(message) {
            this.message = message;
        }
        static create(message) {
            return new MessageQueue(message);
        }
    }
    // private constructor はオーバーライド不可
    // class BadQueue extends MessageQueue
    console.log(MessageQueue.create([]));
    class BalletFlat {
        constructor() {
            this.purpose = 'dancing';
        }
    }
    class Boot {
        constructor() {
            this.purpose = 'woodcutting';
        }
    }
    class Sneaker {
        constructor() {
            this.purpose = 'walking';
        }
    }
    let Shoe = {
        create(type) {
            switch (type) {
                case 'balletFlat': return new BalletFlat;
                case 'boot': return new Boot;
                case 'sneaker': return new Sneaker;
            }
        }
    };
}
{
    class RequestBuilder {
        constructor() {
            this.data = null;
            this.method = null;
            this.url = null;
        }
        setMethod(method) {
            this.method = method;
            return this;
        }
        setData(data) {
            this.data = data;
            return this;
        }
        setURL(url) {
            this.url = url;
            return this;
        }
        send() {
            // ...
        }
    }
    new RequestBuilder()
        .setURL('/users')
        .setMethod('get')
        .setData({ firstName: 'Anna' })
        .send();
}
//# sourceMappingURL=class.js.map