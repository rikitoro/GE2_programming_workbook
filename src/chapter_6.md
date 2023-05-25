# 第 6 章 : 分岐処理

## 6.1 : if 文

### 例題 6-1 : if 文

***`positive.c`***
```c
#include <stdio.h>

int main(void) {
  int number;

  scanf("%d", &number);

  if (number > 0) {
    printf("positive number\n");
  }

  return 0;
}
```

`if` 文の後に続く条件式が真のとき、
`{` と `}` で囲まれたブロック内の文が実行されます。
条件式が偽のときは、ブロック内の文は実行されません。

このプログラムの実行結果を示します。

***`terminal`***
```
42
positive number
```

***`terminal`***
```
-1
```

---

### 例題 6-2 : else 文

***`positive_negative.c`***
```c
#include <stdio.h>

int main(void) {
  int number;

  scanf("%d", &number);

  if (number > 0) {
    printf("positive number\n");
  } else {
    printf("zero or negative number\n");
  }

  return 0;
}
```

このプログラムの実行結果を示します。

***`terminal`***
```
42
positive number
```

***`terminal`***
```
-1
zero or negative number
```

***`terminal`***
```
0
zero or negative number
```

---

### 例題 6-3 : else if 文

***`positive_negative_zero.c`***
```c
#include <stdio.h>

int main(void) {
  int number;

  scanf("%d", &number);

  if (number > 0) {
    printf("positive number\n");
  } else if (number < 0) {
    printf("negative number\n");
  } else {
    printf("zero\n");
  }

  return 0;
}
```

***`terminal`***
```
42
positive number
```

***`terminal`***
```
-1
negative number
```

***`terminal`***
```
0
zero
```

### 例題 6-4 : 複雑な条件式

***`room_temperature.c`***
```c
#include <stdio.h>

int main(void) {
  double temperature;
  
  printf("temperature? ");
  scanf("%lf", &temperature);
  
  if (15.0 <= temperature && temperature <= 25.0) {
    printf("comfortable\n");
  } else {
    printf("uncomfortable\n");
  }

  return 0;
}
```

***`terminal`***
```
temperature? 21.5
comfortable
```

***`terminal`***
```
temperature? 30.0
uncomfortable
```

---

## 6.2 : switch 文

### 例題 6-5 : switch 文

***`weekday.c`***
```c
#include <stdio.h>

int main(void) {
  char weekday_initial;

  scanf("%c", &weekday_initial);

  switch (weekday_initial) {
    case 'M':
      printf("Monday\n");
      break;
    case 'T':
      printf("Tuesday or Thursday\n");
      break;
    case 'W':
      printf("Wednesday\n");
      break;
    case 'F':
      printf("Friday\n");
      break;
    case 'S':
      printf("Saturday or Sunday\n");
      break;
    default:
      printf("invalid\n");
      break;
  }

  return 0;
}
```

***`terminal`***
```
M
Monday
```

***`terminal`***
```
T
Tuesday or Thursday
```

***`terminal`***
```
m
invalid
```

---


### 例題 6-6 : 複雑な制御式

***`sando.c`***
```c
#include <stdio.h>

int main(void) {
  int number;

  printf("What's your favorite number? ");
  scanf("%d", &number);

  switch (number % 3) {
    case 0:
      printf("Wow! You've entered a multiple of 3! That's a shining and magnificent number, indeed! Well done! \n");
      break;
    case 1:
      printf("That's a decently good number.\n");
      break;
    case 2:
      printf("That's not such a bad number.\n");
      break;
    default:
      printf("That's not a positive number.\n");
      break;
  }

  return 0;
}
```

---

### 例題 6-7 : switch 文の fall-through

```c
#include <stdio.h>

int main(void) {
  char weekday_initial;

  scanf("%c", &weekday_initial);

  switch (weekday_initial) {
    case 'M':
    case 'm':
      printf("Monday\n");
      break;
    case 'T':
    case 't':
      printf("Tuesday or Thursday\n");
      break;
    case 'W':
    case 'w':
      printf("Wednesday\n");
      break;
    case 'F':
    case 'f':
      printf("Friday\n");
      break;
    case 'S':
    case 's':
      printf("Saturday or Sunday\n");
      break;
    default:
      printf("invalid\n");
      break;
  }

  return 0;
}
```

---

## 演習

### 演習 6-1

### 演習 6-2

***`fizzbuzz.c`***
```c
#include <stdio.h>

int main(void) {
  int max_count;

  printf("Enter the maximum count: ");
  scanf("%d", &max_count);
  
  for (int count = 1; count <= max_count; count++) {
    if ((count % 3 == 0) && (count % 5 == 0)) {
      printf("FizzBuzz\n");
    } else if (count % 3 == 0) {
      printf("Fizz\n");
    } else if (count % 5 == 0) {
      printf("Buzz\n");
    } else {
      printf("%d\n", count);
    }
  }

  return 0;
}
```