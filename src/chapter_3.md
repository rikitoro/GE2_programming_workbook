# 第 3 章 : 変数とデータ型

### 例題 3-1 : 変数の宣言と値の代入

次のプログラムは変数を用いたデモプログラムです。

***`variables1.c`***
```c
#include <stdio.h>

int main(void) {
  // (1) 変数の宣言
  char character;
  int i, num;
  double temperature;

  // (2) 変数への値の代入
  character = 'z';
  i = 42;
  num = i + 10;
  temperature = -3.4;

  // (3) 変数の値の表示
  printf("%c\n", character);  
  printf("%d\n", i);
  printf("%d\n", num);
  printf("%lf\n", temperature);

  return 0;
}
```

プログラムの説明をしていきます。

変数を用いる際には、まず変数の型(データ型)と変数名を示して宣言する必要があります。
``` c
  // (1) 変数の宣言
  char character;
  int i, num;
  double temperature;
```
これにより、 `char` 型の変数 `character` と、`int` 型の変数 `i` および `num`、
`double` 型の変数 `temperature` が使えるようになりました。
なお、変数を宣言しただけではその変数の値は不定となります。

変数へ値を代入するときは代入演算子 `=` を使います。
```c
  // (2) 変数への値の代入
  character = 'z';
  i = 42;
  num = i + 10;
  temperature = -3.4;
```
代入演算子 `=` の左辺には、代入先となる変数を置き、
右辺には代入する値を持ってきます。

`character = 'z';` が実行されると、`char` 型の変数 `character` に 1 文字の値 `'z'` が代入されます。
同様に `i = 42;` が実行されると、`int` 型の変数 `i` に整数 `42` が代入されます。

代入演算子の右辺に式を持ってくることもできます。
`num = i + 10;` が実行されると右辺が計算され、その計算結果である `52` が `int` 型の変数 `num` に代入されます。
(今、 `i` の値が `42` であったことに注意)

変数の値を表示するには `printf` を用いるとよいです。
`printf` 関数の詳しい使い方については 4 章で説明します。

```c
  // (3) 変数の値の表示
  printf("%c\n", character);  
  printf("%d\n", i);
  printf("%d\n", num);
  printf("%lf\n", temperature);
```

プログラムの実行結果を示します。

***`terminal`***
```
z
42
52
-3.400000
```

---
### 例題 3-2 : 変数の宣言時の初期化

変数の宣言時と同時に変数の値を代入することもできます。
これを変数の初期化といいます。
変数の初期値が決まっている変数に対しては、変数の初期化を行うとよいでしょう。

変数の初期化を用いたプログラムを示します。

***`variables2.c`***
```c
#include <stdio.h>

int main(void) {
  // 変数の宣言時に値を設定
  char character = 'P';
  int num = -57;
  double temperature = 12.34;

  printf("%c\n", character);  
  printf("%d\n", num);
  printf("%lf\n", temperature);

  return 0;
}
```

プログラムの実行結果を示します。

***`terminal`***
```
P
-57
12.340000
```

---

### 例題 3-3 : 代入による変数の上書き

```c
#include <stdio.h>

int main(void) {
  // (1) 初期化
  int i = 10;
  int j = 20;
  printf("(1)\n");
  printf("i = %d\n", i);  
  printf("j = %d\n", j);

  // (2) 代入
  i = 30; 
  j = i; 
  printf("(2)\n");
  printf("i = %d\n", i);  
  printf("j = %d\n", j);

  // (3) さらなる代入
  i = i + 2;
  printf("(3)\n")
  printf("i = %d\n", i);  
  printf("j = %d\n", j);

  return 0;
}
```

***`terminal`***
```
(1)
i = 10
j = 20
(2)
i = 30
j = 30
(3)
i = 32
j = 30
```

---
### 例題 3-4 : キャストによる型の変換

```c
#include <stdio.h>

int main(void) {
  int i = 256;
  double x = -12.34;
  double d_i;
  int i_x;

  // (1) int 型の値を double 型に変換
  d_i = (double)i;
  printf("i   = %d\n", i);
  printf("d_i = %lf\n", d_i);

  // (2) double 型の値を int 型に変換
  i_x = (int)x;
  printf("x   = %lf\n", x);
  printf("i_x = %d\n", i_x);

  return 0;
}
```

***`terminal`***
```
i   = 256
d_i = 256.000000
x   = -12.340000
i_x = -12
```
---

## 演習

### 演習 4-1 

```c
#include <stdio.h>

int main(void) {
  double radius, area;

  radius = 3.0; // この値を変更する。

  area = 3.14 * radius * radius / 2;

  printf("The area of semicircle of ");
  printf("radius %lf is %lf.\n", radius, area);
}
```

