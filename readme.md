# daijiro-creator-website

## 搭載予定機能
* top
* 自己紹介
* ブログ（各ページ分 : 仮想通貨、エンジニア、ゲーム）
* お問い合わせ
* 作品紹介（案件も）
* 動画紹介
* 制作アプリ
* 他リンク（いっしーと共同のサイト等）友達が増えたらその人を紹介する

## 環境（暫定）
* PaaSサーバー : Heroku or AWS
* フレームワーク : laravel, Vue.js, node.js, gulp.js,pug,sass
* UI制作 : Sketch
* ワイヤーフレームツール : Cacoo
* ソースコード管理 : Github

## 方針
* elementUIを使用するページや、自らcssを組み込むページをわける
* Githubはmasterブランチは触らない。feature/masterから触る。
* 搭載予定全てできたら公開、ではなくてとりあえずtop,自己紹介,お問い合わせさえできたら随時公開していく
* SEOに関しては…知らんw  なんとかなるやろw

## 追加情報
* [Laravelでgulpする](https://qiita.com/minechan1234/items/363e2db0c1d915651f79)

bootstrapをpublic/に反映、bowerというフレームワークを使用できるようにした。
「gulp」コマンドを叩くだけでbuildできる（多分）