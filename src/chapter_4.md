# 第 4 章 : 標準入出力

## 4.1 : 標準出力

### 例題 4-1 : 

```c
#include <stdio.h>

int main(void) {
  char atmark = '@';
  int score = 42;
  double temperature = 12.34;

  printf("Hello, World\n");     // (1) 文字列の出力
  printf("%c\n", atmark);       // (2) 文字の出力
  printf("%d\n", score);        // (3) 数値( int 型)の出力
  printf("%lf\n", temperature); // (4) 数値( double 型)の出力
  // (5) 組合せ
  printf("score : %d, temperature : %lf\n", score, temperature); 
  return 0;
}
```

***`terminal`***
```
Hello, World
@
42
12.340000
score : 42, temperature : 12.340000
```

---

### 例題 4-2 :

```c
#include <stdio.h>

int main(void) {
  int score = 84;
  double value = 123.45678;

  printf("1234567890\n");
  printf("%4d\n", score);     // 整数 4 桁で表示
  printf("%6.2lf\n", value);  // 実数 全体で 6 桁(小数点含む)，小数点以下 2 桁で表示
  printf("%e\n", value);      // 実数 指数形式で表示

  return 0;
}
```

***`terminal`***
```
12345678901234567890
  84
123.46
1.234568e+02
```

---

### 例題 4-3 :

```c
#include <stdio.h>

int main(void) {
  char character;
  
  scanf("%c", &character);

  printf("The character you entered : %c\n", character);

  return 0;
}
```

***`terminal`***
```
Q
The character you entered : Q
```

---

### 例題 4-3 :

```c
#include <stdio.h>

int main(void) {
  double width, height;
  double area;

  printf("Enter width height : \n");

  scanf("%lf %lf", &width, &height);

  area = width * height;
  printf("Area of the rectagle : %lf\n", area);

  return 0;
}
```

***`terminal`***
```
Enter width height : 
2.3 10.0
Area of the rectagle : 23.000000
```

