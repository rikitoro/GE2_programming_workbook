# 第 2 章 : C 言語の基礎

## 2.4 C 言語によるプログラミング

### 例題 2-1 : Hello, World!

次のプログラムは、標準出力 (ターミナル) へ `Hello, World!` と表示するプログラムです。


***`hello.c`***
``` c
#include <stdio.h>  // (1)

int main(void) {    // (2)
  printf("Hello, World!\n");  //(3)

  return 0; // (4)
}
```


```c
#include <stdio.h>  // (1)
```

```c
int main(void) {    // (2)
  ...(中略)
}
```
C 言語で作成したプログラムは、実行するとはじめに `main` 関数が呼び出されます。
ここではその `main` 関数を定義しています。

```c
  printf("Hello, World!\n");  //(3)
```
`printf` は引数で指定した文字列を表示する命令です。
`\n` は改行文字です。

```c
  return 0; // (4)
```
`main` 関数は正常に終了すると整数 `0` を返します。

このプログラムをコンパイルし、実行すると次のように `Hello, World!` と表示し改行されます。

***`terminal`***
```
$ gcc hello.c -o hello
$ ./hello
Hello, world!
$
```

---

### 演習 2-1 

次のプログラムの `<your name>` の部分を自分の名前に変更したプログラムを作成し、コンパイルし実行して、その動作を確認しましょう。

***`name.c`***
``` c
#include <stdio.h>

int main(void) {
  printf("Hello, ");
  printf("<your name>");
  printf("!\nHow are you?\n");

  return 0;
}
```
---