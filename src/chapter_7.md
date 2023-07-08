# 第 7 章 : 繰り返し処理

## 7.1 : for 文

### 例題 7-1 : for 文

for 文は、繰り返し処理を行うための文です。
決まった回数の繰り返し処理を行う場合によく利用されます。

次のプログラムは、for 文を利用して 1 から 10 までの整数の和を
途中の計算結果を表示しながら求めるプログラムです。

***`sum.c`***

```c
#include <stdio.h>

int main(void) {
  int sum = 0;
  int i;

  for (i = 1; i <= 10; i++) {
    sum += i;
    printf("i = %d, sum = %d\n", i, sum);
  }

  printf("sum = %d\n", sum);

  return 0;
}
```

for 文の書式は次の通りです。

```c
for (初期設定式; 継続条件式; 再設定式) {
  処理
}
```
for 文の実行の流れは次のフローチャートの通りです。

![flowchart](./assets/for.drawio.png)

まず初めに、初期設定式が実行されます。
次に継続条件式が評価され、真であれば処理と再設定式が実行されます。
その後再び継続条件式が評価されます。
継続条件式が真となるあいだは、処理と再設定式が繰り返し実行されます。
継続条件式が偽となると、for 文の実行を終了します。


例題のプログラム `sum.c` では、
初期設定式、継続条件式、再設定式、処理の部分はそれぞれ次のようになります。

- 初期設定式 : `i = 1`
- 継続条件式 : `i <= 10`
- 再設定式 : `i++`
- 処理 : `sum += i; printf("i = %d, sum = %d\n", i, sum);`

プログラム全体の処理の流れを示したフローチャートは次のようになります。
for 文の初期設定式、継続条件式、再設定式、処理の部分がそれぞれフローチャートの
どこに対応するかを確認してください。

![flowchart](./assets/flowchart_chap07_sum.drawio.png)

実行結果は次の通りです。

***`terminal (実行結果)`***
```
i = 1, sum = 1
i = 2, sum = 3
i = 3, sum = 6
i = 4, sum = 10
i = 5, sum = 15
i = 6, sum = 21
i = 7, sum = 28
i = 8, sum = 36
i = 9, sum = 45
i = 10, sum = 55
sum = 55
```

なお、このプログラムのフローチャートは、ループ端記号を用いて
次のように表すこともできます。

![flowchart](./assets/flowchart_chap07_sum_loop.drawio.png)

---


## 7.2 : while 文

### 例題 7-3 : while 文

```c
#include <stdio.h>

int main(void) {
  char c;

  scanf("%c", &c);

  while (c != 'q') {
    printf("input character : %c\n", c);
    scanf("%c", &c);
  }

  return 0;
}
```

```
a
input character : a
3
input character : 3
q
```

```
q
```

## 7.3 : do-while 文

### 例題 7-4 : do-while 文

```c
#include <stdio.h>

int main(void) {
  char c;

  do {
    scanf("%c", &c);
    printf("input character : %c\n", c);
  } while (c != 'q');

  return 0;
}
```

```
a
input character : a
3
input character : 3
q
input character : q
```

```
q
input character : q
```




---
### 例題 7-2 : 二重ループ

```c
#include <stdio.h>

int main(void) {
  int i, j;

  for (i = 0; i < 10; i++) {
    for (j = 0; j <= i; j++) {
      printf("*");
    }
    printf("\n");
  }

  return 0;
}
```

```
*
**
***
****
*****
******
*******
********
*********
**********
```
