# TypeScript_prac

## 非同期処理
- 先に実行中を表すPromiseを渡しておいて、後で非同期処理が完了したら成功か失敗かの情報を付与したPromiseを返す。
- 非同期関数は思い通りに実行されないことが多く、それを防ぎ、同期的に処理するためにPromiseやasync/await を上手く使う。

## 注意書きメモ
- `HTMLAnchorElement`などを使えるようにしておくため、tsconfig.jsonのなかに、`"lib": ["ES2015", "DOM"]`というように付け加えておく。
- P108のコードがなぜかうまく実装できなかった（エラーが出ちゃう）
- p167 `let date = parse(ask())`がエラーが出ちゃう
