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

![flowchart](./assets/flowchart_chap06_positive.drawio.png)


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

![flowchart](./assets/flowchart_chap06_posneg.drawio.png)


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

![flowchart](./assets/flowchart_chap06_posnegzero.drawio.png)


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
  
  if (15.0 <= temperature && temperature < 25.0) {
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

![flowchart](./assets/flowchart_chap06_weekday.drawio.png)

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

### 例題 6-6 : switch 文の fall-through

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

***`terminal`***
```
T
Tuesday or Thursday
```

***`terminal`***
```
t
Tuesday or Thursday
```


---

### 例題 6-7 : if 文と switch 文の混在

***`if_switch.c`***
```c
#include <stdio.h>

int main(void) {
  int n;

  printf("What's your favorite number? ");
  scanf("%d", &n);

  if (n >= 0) {
    switch (n % 3) {
      case 0:
        printf("Wow! You've entered a multiple of 3! That's a shining and magnificent number, indeed! Well done! \n");
        break;
      case 1:
        printf("Oh. That's a decently good number.\n");
        break;
      case 2:
        printf("Hmm. That's not such a bad number.\n");
        break;
    }
  } else {
    printf("Negative number.\n");
  }

  return 0;
}
```

![flowchart](./assets/flowchart_chap06_ifswitch.drawio.png)


***`terminal`***
```
What's your favorite number? 42
Wow! You've entered a multiple of 3! That's a shining and magnificent number, indeed! Well done!
```

***`terminal`***
```
What's your favorite number? 43
Oh. That's a decently good number.
```

***`terminal`***
```
What's your favorite number? -1
That's a negative number.
```

---

## 演習

### 演習 6-1

架空のS水族館は、入場者の年齢によって入場料が決まります。
年齢と入場料の対応は以下の表のとおりです。

| 券種 | 年齢 | 入場料(円) |
| --- | --- | --- |
| 大人 | 13歳以上65歳未満 | 2400 |
| 子供 | 13歳未満 | 1200 |
| シニア | 65歳以上 | 1800 |

年齢を入力すると、入場料を出力するプログラムを作成してください。
なお、年齢は0以上の整数で入力されるものとします。

期待される実行結果は以下の通りです。

***`terminal`***
```
13
2400 yen
```

***`terminal`***
```
10
1200 yen
```


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