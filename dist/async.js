"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
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
// {
// Promiseを用いた場合
// function appendAndReadPromise(path: string, data: string): Promise<string>{
//   return appendAndReadPromise(path, data)
//     .then(() => readPromise(path))
//     .catch(error => console.error(error))
// }
// // コールバックを用いた場合
// function appendAndRead(
//   path: string,
//   data: string,
//   cb: (error: Error | null, result: string | null) => void
// ){
//   appendFile(path, data, error => {
//     if(error){
//       return cb: (error, null)
//     }
//     readFile(path, (error, result) => {
//       if (error){
//         return cb(error, null)
//       }
//       cb(null, result)
//     })
//   })
// }
// type Executor<T> = (
//   resolve: (result: T) => void,
//   reject: (error: unknown) => void
// ) => void
// class Promise<T>{
//   constructor(f: Executor<T>){}
//   then<U>(g: (result: T) => Promise<U> | U): Promise<U>{}
//   catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U>{}
// }
// function readFilePromise(path: string): Promise<string>{
//   return new Promise((resolve, reject) => {
//     readFile(path, (error, result) => {
//       if (error){
//         reject(error)
//       }else{
//         resolve(result)
//       }
//     })
//   })
// }
// }
{
    // async function getUser(){
    //   try{
    //     let user = await getUserID(18)
    //     let location = await getLocation(user)
    //     console.info('get location', location)
    //   }catch(error){
    //     console.error(error)
    //   }finally{
    //     console.info('done getting location')
    //   }
    // }
}
//# sourceMappingURL=async.js.map