# 第 5 章 : 演算子

## 5.1 算術演算子

### 例題 5-1 : 算術演算

***`arithmetic.c`***
```c
#include <stdio.h>

int main(void) {
  int a = 8, b = -2, c = 3;
  printf("a + b = %d\n", a + b);  // -> 6
  printf("(a - b) * c + 12 = %d\n", (a - b)  * c + 12); // -> 42
  printf("a mod c = %d\n", a % c);  // -> 2 (a を c で割った余り)

  double pi = 3.14, e = 2.71;
  printf("pi + e = %f\n", pi + e);  // -> 5.850000
  printf("pi / e = %f\n", pi / e);  // -> 1.168672
  printf("pi / a = %f\n", pi / a);  // -> 0.392500

  return 0;
}
```

***`terminal`***
```
a + b = 6
(a - b) * c + 12 = 42
a mod c = 2
pi + e = 5.850000
pi / e = 1.158672
pi / a = 0.392500
```

---

### 例題 5-2 整数同士の割り算

***`division.c`***
```c
#include <stdio.h>

int main(void) {
  int a = 8, b = 3;

  int x1 = a / b; // -> 2
  double x2 = (double) (a / b); // -> 2.000000
  double x3 = (double) a / b;   // -> 2.666667

  printf("x1 = %d\n", x1);
  printf("x2 = %f\n", x2);
  printf("x3 = %f\n", x3);
  
  return 0;
}
```

***`terminal`***
```
x1 = 2
x2 = 2.000000
x3 = 2.666667
```
---

## 5.2 論理演算子

### 例題 5-3 : ビット単位の論理演算

***`bitwiseOp.c`***
```c
#include <stdio.h>

int main(void) {
  unsigned char a = 0x0F; // 00001111
  unsigned char b = 0x3A; // 00111010

  unsigned char a_and_b = a & b;  // -> 00001010 = 0A
  unsigned char a_or_b  = a | b;  // -> 00111111 = 3F
  unsigned char a_xor_b = a ^ b;  // -> 00110101 = 35
  unsigned char not_b   = ~b;     // -> 11000101 = C5

  printf("a & b = %02X\n", a_and_b);
  printf("a | b = %02X\n", a_or_b);
  printf("a ^ b = %02X\n", a_xor_b);
  printf("~b    = %02X\n", not_b);
  
  return 0;
}
```

***`terminal`***
```
a & b = 0A
a | b = 3F
a ^ b = 35
~b    = C5
```

---
## 5.3 比較演算子

### 例題 5-4 : 比較演算

***`comparisionOp.c`***
```c
#include <stdio.h>

int main(void) {
  int three = 3;

  printf("three == 3 : %d\n", three == 3); // -> 1 (true)
  printf("three != 3 : %d\n", three != 3); // -> 0 (false)
  printf("three > 3  : %d\n", three > 3);  // -> 0 (false)
  printf("three >= 3 : %d\n", three >= 3); // -> 1 (true)
  printf("three < 3  : %d\n", three < 3);  // -> 0 (false)
  printf("three <= 3 : %d\n", three <= 3); // -> 1 (true)

  return 0;
}
```


***`terminal`***
```
three == 3 : 1
three != 3 : 0
three > 3  : 0
three >= 3 : 1
three < 3  : 0
three <= 3 : 1
```

### 例題 5-5 : 論理演算　

***`logicOp.c`***
```c
#include <stdio.h>

int main(void) {
  int three = 3;

  printf(" three == 3 : %d\n", three == 3); // -> 1 (true)
  printf(" three > 3  : %d\n", three > 3);  // -> 0 (false)

  printf(" (three == 3) && (three > 3) : %d\n", (three == 3) && (three > 3)); // -> 0 (false)
  printf(" (three == 3) || (three > 3) : %d\n", (three == 3) || (three > 3)); // -> 1 (true)
  printf(" !(three == 3)               : %d\n", !(three == 3));               // -> 0 (false)

  return 0;
}
```

***`terminal`***
```
 three == 3 : 1
 three > 3  : 0
 (three == 3) && (three > 3) : 0
 (three == 3) || (three > 3) : 1
 !(three == 3)               : 0
```
---

## 5.4 増減演算子

### 例題 5-6 : インクリメント・デクリメント

***`incdec.c`***
```c
#include <stdio.h>

int main(void) {
  int a = 57;

  printf("a = %d\n", a); // -> 57
  a++; // a = a + 1 と同等　(++a も可)
  printf("a = %d\n", a); // -> 58
  a--; // a = a - 1 と同等　(--a も可)
  a--;
  printf("a = %d\n", a); // -> 56

  return 0;
}
```

***`terminal`***
```
a = 57
a = 58
a = 56
```
---

### 例題 5-7 : 前置・後置の違い

```c
#include <stdio.h>

int main(void) {
  int n, m;

  n = 42;
  printf("n = %d\n", n);
  m = n++; // m = n; n = n + 1; と同等 -> m = 42, n = 43
  printf("m = %d, n = %d\n", m, n);

  n = 42;
  printf("n = %d\n", n); // -> 42
  m = ++n;  // n = n + 1; m = n; と同等 -> m = 43, n = 43
  printf("m = %d, n = %d\n", m, n);

  return 0;

}
```

```
n = 42
m = 42, n = 43
n = 42
m = 43, n = 43
```
---

## 5.5 シフト演算子

### 例題 5-8 : シフト演算

***`shiftOp.c`***
```c
#include <stdio.h>

int main(void) {
  unsigned char a = 0xAF; // -> 10101111

  unsigned char a_shifted_left  = a << 2; // -> 10111100 = BC
  unsigned char a_shifted_right = a >> 2; // -> 00101011 = 2B

  printf("a      = %02X\n", a);
  printf("a << 2 = %02X\n", a_shifted_left);
  printf("a >> 2 = %02X\n", a_shifted_right);

  return 0;
}
```

***`terminal`***
```
a      = AF
a << 2 = BC
a >> 2 = 2B
```

---

## 5.6 代入演算子

### 例題 5-9 : 代入演算

```c
#include <stdio.h>

int main(void) {
  int num = 57;
  printf("num = %d\n", num); // -> 57

  num += 3; // num = num + 3 と同じ
  printf("num = %d\n", num); // -> 60

  num *= 2; // num = num * 2 と同じ
  printf("num = %d\n", num); // -> 120

  return 0;
}
```

---

## 5.7 条件演算子

### 例題 5-10 : 条件演算

***`relu.c`***
```c
#include <stdio.h>

int main(void) {
  double val_input, val_output;

  scanf("%lf", &val_input);
  val_output = (val_input > 0L) ? val_input : 0L;
  printf("val_output = %f\n", val_output);
  
  return 0;
}
```

***`terminal`***
```
3.14
val_output = 3.140000
```

***`terminal`***
```
-1.414
val_output = 0.000000
```


---

## 演習

### 演習 5-1