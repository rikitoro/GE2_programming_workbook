# 第 2 章 : C 言語の基礎

## 2.4 C 言語によるプログラミング

### 例題 2-1 : Hello, World!

プログラムは、標準出力(ターミナル)へ `Hello, World!` 表示するプログラムです。

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

```c
  printf("Hello, World!\n");  //(3)
```

```c
  return 0; // (4)
```
---

### 演習 2-1 

***`name.c`***
``` c
#include <stdio.h>

int main(void) {
  printf("Hello, ");
  printf("<your name>");
  printf(" How are you?\n");

  return 0;
}
```
---