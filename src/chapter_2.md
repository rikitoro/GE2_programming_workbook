# 第 2 章 : C 言語の基礎

## 2.4 C 言語によるプログラミング

### 例題 2-1 : Hello, World!

***`hello.c`***
``` c
#include <stdio.h>

int main(void) {
  printf("Hello, World\n");

  return 0;
}
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