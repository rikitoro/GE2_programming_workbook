# 第 1 章 : 序論

## 1.3 コンピュータに仕事をさせるための手順

### 例題 1-1 : プログラムの作成・コンパイル・実行

C 言語でプログラムを作成してコンパイルを行って実行コードを生成し、実行するまでの手順を体験してみましょう。

初めにソースコードを作成します。エディタ(Emacs, Vim, VSCode など)で、次のプログラムを作成を作成し、ファイル名を `first.c` として保存します。
なお、 C 言語のソースコードのファイル(ソースファイル)の拡張子は `.c` とする必要があります。

`first.c`
````c
#include <stdio.h>

int main(void) {
  printf("This is my first C program!\n");

  return 0;
}
````

次に端末を開き、 `gcc` コマンドでソースファイルを指定してコンパイルを行います。コンパイルを行ってできる実行コードのファイル名は `gcc` コマンドの `-o` オプションで指定しましょう。
次のようにソースファイル `main.c` をコンパイルすると、プログラムに構文エラー(Syntax error)がなければ、実行コード `first` が作成されます。

`terminal`
````
$ gcc main.c -o main
$ ls
first  first.c
````

実行コード `first` を実行します。
プログラムに誤りがなければ、 `This is my first C program!` と表示され、改行されます。

`terminal`
````
$ ./first
This is my first C program!
````

> ソースコードに構文エラー(文法上の誤り)があると、コンパイルに失敗し、コンパイラが次のようなエラーメッセージを表示します。
> エラーメッセージをよく確認し、ソースコードを修正したうえで再度コンパイルを行いましょう。

`terminal`
````AST
$ gcc first.c -o first
first.c: In function ‘main’:
first.c:4:42: error: expected ‘;’ before ‘return’
    4 |   printf("This is my first C program!\n")
      |                                          ^
      |                                          ;
    5 | 
    6 |   return 0;
      |   ~~~~~~      
````
---

