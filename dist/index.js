"use strict";
{
    let a;
    a = { b: 1 };
    a = { b: 1, c: undefined };
    a = { b: 1, c: 'd' };
    a = { b: 1, 10: true };
    a = { b: 1, 10: true, 20: false };
    console.log(a);
    let airplaneSeatingAssignments = {
        '34D': 'Boris Cherny',
        '34E': 'Bill Gates'
    };
    let user = {
        firstName: 'abby'
    };
    console.log(user.firstName);
    // readonly修飾子をつけたので、別の値を代入したりはできない
}
{
    let age = 54;
    let driver = {
        name: 'James May',
        age: age
    };
    let x = Math.random() < .5;
    if (x) {
        let b = 'blue';
    }
    else {
        let c = 'red';
    }
}
{
    // このように両方の和集合の中のどの要素も取ることができる
    let a = {
        name: 'Bonkers',
        purrs: true,
        barks: true
    };
    // 両方の要素が全て含まれる必要がある
    let b = {
        name: 'Domino',
        barks: true,
        purrs: false,
        wags: true
    };
    function trueOrNull(isTrue) {
        if (isTrue) {
            return 'true';
        }
        return null;
    }
}
{
    let e = [2, 'b'];
    let d = [1, 'a'];
    d.map(_ => {
        if (typeof _ === 'number') {
            return _ * 3;
        }
        else {
            return _.toUpperCase();
        }
    });
    console.log(d);
}
{
    let a = [1];
    // このようにタプルは最初に明示的に型付けされる
    let b = ['melcolm', 'gladwell', 1963];
    // b = ['queen', 'elizabeth', 'ii', 1926] このような存在しない要素に関する代入はできない
    let trainFares = [
        [3.75],
        [8.25, 7.70],
        [10.50]
    ];
    let moreTrainFares = [
    // 
    ];
    let friends = ['Sara', 'Ken', 'Mei'];
    let list = [1, false, 'a', 'b', 'c'];
    let as = [1, 2, 3];
    let bs = as.concat(4); // 4を最後に付け加えてタプルを返す
    console.log(bs);
}
{
    function a(x) {
        if (x < 10) {
            return x;
        }
        return null;
    }
    function b() {
        return undefined;
    }
    function d() {
        throw TypeError('I always error');
    }
    // 終わらないので、返り値はnever
    function e() {
        while (true) {
        }
    }
    console.log(a(11));
    console.log(b());
    // console.log(d());
}
{
    let Language;
    (function (Language) {
        Language[Language["English"] = 0] = "English";
        Language[Language["Spanish"] = 1] = "Spanish";
        Language[Language["Russian"] = 2] = "Russian";
    })(Language || (Language = {}));
    console.log(Language.Spanish);
}
{
    let a = 0 /* English */;
    function flip(f) {
        return 'flipped it';
    }
    flip(1 /* Chair */);
    flip(12); // これでもエラーが出ない！
    // これを防ぐために、最初から文字列の値をFlippableを定義する段階で代入するべき！
}
//# sourceMappingURL=index.js.map