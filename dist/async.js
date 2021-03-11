"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fs_1 = require("fs");
// これは元々含まれているreadFileのイメージ
// function readFile(
//   path: string,
//   options: {encoding: string, flag?: string},
//   callback: (err: Error | null, data: string | null) => void
// ):void{
// }
// readFileは非同期処理をする
fs.readFile('/var/log/apache2/access_log', { encoding: 'utf-8' }, (error, data) => {
    if (error) {
        console.error('error reading!', error);
        return;
    }
    console.info('success reading!', data);
});
fs.appendFile('var/log/apache2/access_log', 'New access log entry', error => {
    if (error) {
        console.error('error writing!', error);
    }
});
{
    // Promiseを用いた場合
    function appendAndReadPromise(path, data) {
        return appendAndReadPromise(path, data)
            .then(() => readPromise(path))
            .catch(error => console.error(error));
    }
    // コールバックを用いた場合
    function appendAndRead(path, data, cb) {
        appendFile(path, data, error => {
            if (error) {
                return cb;
                (error, null);
            }
            fs_1.readFile(path, (error, result) => {
                if (error) {
                    return cb(error, null);
                }
                cb(null, result);
            });
        });
    }
    class Promise {
        constructor(f) { }
    }
    function readFilePromise(path) {
        return new Promise((resolve, reject) => {
            fs_1.readFile(path, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
}
//# sourceMappingURL=async.js.map