# webpack2-boilerplate-simple

Webpack 2 と Browsersync を使ったシンプルなボイラープレートが欲しかったので作ってみたやつ。

## Install

    $ yarn

or

    $ npm install

## Development

    $ yarn start

デフォルトブラウザが立ち上がってサイトが表示されます。
この状態でsrc内のファイルに変更があると自動でブラウザが更新されます。

### For Windows

    $ yarn start_win

Windowsだと`&`で繋いでnpm scriptsを実行できないようなので、別コマンドに切り分け。

※ macでこのコマンドを使った場合`Ctrl + C`を押して`Enter`を押さないと復帰できないので、startコマンドを2つにしました。


## Build

    $ yarn build

デプロイ用にビルドされます。

## About

CSSは別ファイルに分けてます。

### こういう感じの使ってます

* Webpack 2
* Browsersync
* Babel
* PostCSS


## Author
mya-ake(しぶ、しぶさん)

web:https://mya-ake.com/

Twitter:https://twitter.com/mya_ake

## Version

1.1.2 (March 18, 2017)

## License
The MIT License (MIT)

Copyright (c) 2017 mya-ake

