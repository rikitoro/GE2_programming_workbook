# 第 1 章 : 序論

## 1.3 コンピュータに仕事をさせるための手順

### 例題 1-1 : プログラムの作成・コンパイル・実行

C 言語でプログラムを作成してコンパイルを行って実行コードを生成し、実行するまでの手順を体験してみましょう。

初めにソースコードを作成します。エディタ(Emacs, Vim, VSCode など)で、次のプログラムを作成を作成し、ファイル名を `first.c` として保存します。
なお、 C 言語のソースコードのファイル(ソースファイル)の拡張子は `.c` とする必要があります。

***`first.c`***
``` c
#include <stdio.h>

int main(void) {
  printf("This is my first C program!\n");

  return 0;
}
```

次に端末を開き、 `gcc` コマンドでソースファイルを指定してコンパイルを行います。コンパイルを行ってできる実行コードのファイル名は `gcc` コマンドの `-o` オプションで指定しましょう。
次のようにソースファイル `first.c` をコンパイルすると、プログラムに構文エラー(Syntax error)がなければ、実行コード `first` が作成されます。

***`端末 (ソースコード first.c のコンパイル)`***
```
$ gcc -o first first.c
$ ls
first  first.c
```

実行コード `first` を実行します。
プログラムに誤りがなければ、標準出力に `This is my first C program!` と表示され、改行されます。

***`端末 (実行コード first の実行結果)`***
```
$ ./first
This is my first C program!
$
```

> **tips**
> ソースコードに構文エラー(文法上の誤り)があると、コンパイラはコンパイルに失敗し、次のようなエラーメッセージやヒントを表示します。
> エラーメッセージをよく確認し、ソースコードを修正したうえで再度コンパイルを行いましょう。

***`端末 (コンパイル時のエラーメッセージの例)`***
```
$ gcc first.c -o first
first.c: In function ‘main’:
first.c:4:42: error: expected ‘;’ before ‘return’
    4 |   printf("This is my first C program!\n")
      |                                          ^
      |                                          ;
    5 | 
    6 |   return 0;
      |   ~~~~~~      
```

---


### 例題 1-2 : コンパイルとリンク

`gcc` にはコンパイラとリンカの両方の機能が備わっています。
プログラミング基礎で扱うような小規模なプログラムの開発では、
例題 1-1 で行ったように `gcc` でソースコードから直接実行コードを作成しても問題ありませんが、複数のソースコードを必要とする大規模な開発では、コンパイルとリンクを分けて行うことが多いです。

参考のために、コンパイルとリンクを分けて実行コードを作成する方法を体験しておきましょう。

まず、次のソースコードを作成し、`second.c` とファイル名を付けて保存しましょう。

***`second.c`***
```` c
#include <stdio.h>

int main(void) {
  printf("Second program!\n");

  return 0;
}
````

次にソースコードをコンパイルしオブジェクトコードを作成します。
`gcc` の `-c` オプションを用います。
次のようにコンパイルを行うと、オブジェクトコードのファイル `second.o` が作成されます。

***`端末 (ソースコードからオブジェクトコードを作成)`***
````
$ gcc -c second.c
$ ls
second.c  second.o
````

最後に、リンカを用いて、オブジェクトコードから実行コードを作成します。
リンカは複数のオブジェクトコードやライブラリを結合して、コンピュータ上で直接実行できる実行コードを作成するものです。
リンクは `gcc` の `-o` オプションで、実行コードのファイル名と、リンク対象のオブジェクトコードを指定して行います。

***`端末 (リンカでオブジェクトコードから実行コードを作成)`***
````
$ gcc -o second second.o
$ ls
second  second.c  second.o
````

実行コード `second` を実行すると、標準出力に `Second program!` と表示され改行されます。

***`端末 (実行結果)`***
````
$ ./second
Second program!
$
````

> **tips**
> 実行コードやオブジェクトコードはコンピュータが解釈できる 0, 1 の2進数でされる機械語で書かれたプログラム(およびデータ)となっています。
> (通常の)人間が読んでわかるものではありませんが、`xxd` コマンドや `od` コマンドを使って、次のように実行コードの中身を見ることはできます。

***`端末 (実行コードの中身)`***
````
$ xxd -b second | less
00000000: 01111111 01000101 01001100 01000110 00000010 00000001  .ELF..
00000006: 00000001 00000000 00000000 00000000 00000000 00000000  ......
0000000c: 00000000 00000000 00000000 00000000 00000011 00000000  ......
00000012: 00111110 00000000 00000001 00000000 00000000 00000000  >.....
00000018: 01100000 00010000 00000000 00000000 00000000 00000000  `.....
0000001e: 00000000 00000000 01000000 00000000 00000000 00000000  ..@...
00000024: 00000000 00000000 00000000 00000000 10011000 00110110  .....6
(以下略 q で表示終了)
````

---

## 演習

### 演習 1-1

以下のソースコードをコンパイルし、実行してプログラムの動作を確認してください。

***`count10.c`***
```` c
// IS2 99 愛子花子
#include <stdio.h>

int main(void) {
  int count;

  for (count = 1; count <= 10; count++) {
    printf("%d ", count);
  }

  printf("end!\n");

  return 0;
}
````

プログラムの実行結果については、次のように `script` コマンドを用いて、
ターミナルへの入出力をファイル `count10.txt` に保存してください。

***`端末 (実行結果を script コマンドで保存)`***
```
$ script count10.txt
$ ./count10
1 2 3 4 5 6 7 8 9 10 end!
$ exit
```