"use strict";
{
    function greet(name) {
        return 'hello' + name;
    }
    let greet2 = function (name) {
        return 'hello' + name;
    };
    let greet3 = ((name) => {
        return 'hello' + name;
    });
    let greet4 = (name) => 'hello' + name;
    let greet5 = new Function('name', 'return "hello " + name');
}
{
    function log(message, userId) {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId || 'Not signed in'); // UserIdに入力がなかった場合も用意しておく, 実際はデフォルトパラメータを使った方が良い
    }
    log('Page loaded');
    log('User signed in', 'da763be');
    function log2(message, userId = 'Not signed in') {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId || 'Not signed in'); // UserIdに入力がなかった場合も用意しておく
    }
    function log3(message, context = {}) {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, context.userId);
    }
    function sum(numbers) {
        return numbers.reduce((total, n) => {
            return total + n;
        }, 0);
    }
    console.log(sum([1, 2, 3]));
    // レストパラメータを使う方法
    function sumVariadicSafe(...numbers) {
        return numbers.reduce((total, n) => total + n, 0);
    }
    console.log(sumVariadicSafe(1, 2, 3));
}
{
    function add(a, b) {
        return a + b;
    }
    add.apply(null, [10, 23]);
    add.call(null, 10, 23);
    add.bind(null, 10, 23)();
    function fancyDate() {
        return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`;
    }
    console.log(fancyDate.call(new Date));
}
{
    // ジェネレーター関数
    function* createFibonacciGenerator() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
    let fibonacciGenerator = createFibonacciGenerator();
    fibonacciGenerator.next();
    fibonacciGenerator.next();
    fibonacciGenerator.next();
    fibonacciGenerator.next();
    fibonacciGenerator.next();
    fibonacciGenerator.next();
    console.log(fibonacciGenerator.next());
    function* createNumbers() {
        let n = 0;
        while (1) {
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
        *[Symbol.iterator]() {
            for (let n = 1; n <= 10; n++) {
                yield n;
            }
        }
    };
    console.log(numbers);
    for (let a of numbers) {
        console.log(a);
    }
    let [one, two, ...rest] = numbers;
    let allNumbers = [...numbers];
    console.log(rest);
    console.log(allNumbers);
}
{
    let log = (message, userId = 'Not signed in') => {
        let time = new Date().toISOString();
        console.log(time, message, userId);
    };
    // timesは第一引数にコールバック関数を取る
    function times(f, n) {
        for (let i = 0; i < n; i++) {
            f(i);
        }
    }
    times(n => console.log(n), 10);
}
{
    let reserve = (from, toOrDestination, destination) => {
        if (toOrDestination instanceof Date && destination !== undefined) {
            // 宿泊旅行を予約する
        }
        else if (typeof toOrDestination === 'string') {
            // 日帰り旅行を予約する
        }
    };
}
//# sourceMappingURL=func.js.map