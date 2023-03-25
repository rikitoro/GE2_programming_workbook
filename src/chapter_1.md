# 第 1 章 : 序論

## 1.3 コンピュータに仕事をさせるための手順

### 例題 1-1 : プログラムの作成・コンパイル・実行

C 言語でプログラムを作成してコンパイルを行って実行コードを生成し、実行するまでの手順を体験してみましょう。

初めにソースコードを作成します。エディタ(Emacs, Vim, VSCode など)で、次のプログラムを作成を作成し、ファイル名を `main.c` として保存します。
C 言語のソースコードのファイル(ソースファイル)の拡張子は `.c` とします。

`.c`
````c
#include <stdio.h>

int main(void) {
  printf("This is my first C program!\n");

  return 0;
}
````


`terminal`
````
$ gcc main.c -o main
````

`terminal`
````
$ ls
main.c main
````

---

