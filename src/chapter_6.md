# 第 6 章 : 分岐処理

## 6.1 : if 文

### 例題 6-1 : if 文

ある条件が成り立つか、
成り立たないかによって行う処理を分岐させるには、
if 文を使います。

次のプログラムは、if 文を使って、
入力された数値が正の数かどうかを判定し、
正の数であれば `positive number` と表示し、
そうでなければ何も表示しないプログラムです。

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

`if` の後に続く条件式 `number > 0` が真のとき、
`{` と `}` で囲まれたブロック内の文が実行されます。
すなわち、`mumber` が正の数の時は、
`printf("positive number\n");` が実行され、
`positive number` と表示されます。

条件式が偽、すなわち、`mumber` がゼロまたは負の数の場合は、
ブロック内の文は実行されず、なにも表示されません。

このプログラムの処理の流れを示すフローチャートを次に示します。

![flowchart](./assets/flowchart_chap06_positive.drawio.png)

プログラムの実行結果を示します。
1 行目は、入力された数値を表しています。
正の数を入力した場合は、`positive number` と表示されます。

***`terminal`***
```
42
positive number
```

負の数を入力した場合は、何も表示されません。
***`terminal`***
```
-1
```

---

### 例題 6-2 : else 文

if 文の後に `else` を続けることで、
条件式が偽の場合に実行する文を指定できます。

次のプログラムは、入力された数値が正の数かどうかを判定し、
正の数であれば `positive number` と表示し、
そうでなければ `zero or negative number` と表示するプログラムです。

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

if 文の条件式 `number > 0` が成り立つときは、
続くブロック内の文 `printf("positive number\n");` が実行されます。
条件式が成り立たないとき、すなわち、`number` がゼロまたは負の数のときは、
`else` の後に続くブロック内の文
`printf("zero or negative number\n");` が実行されます。

このプログラムの処理の流れを示すフローチャートを次に示します。

![flowchart](./assets/flowchart_chap06_posneg.drawio.png)


プログラムの実行結果を示します。
1 行目は、入力された数値を表しています。
正の数を入力した場合は次のように、`positive number` と表示されます。

***`terminal`***
```
42
positive number
```

負の数を入力した場合は、`zero or negative number` と表示されます。

***`terminal`***
```
-1
zero or negative number
```

ゼロを入力した場合も、`zero or negative number` と表示されます。

***`terminal`***
```
0
zero or negative number
```

---

### 例題 6-3 : else if 文

if 文の後に `else if` を続けることで、
最初の条件式が偽の場合に、
さらに別の条件式を指定して処理を分岐させることができます。

次のプログラムは、入力された数値が正の数かどうかを判定し、
正の数であれば `positive number` 、
負の数であれば `negative number` 、
ゼロであれば `zero` と表示するプログラムです。

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

if 文の最初の条件式 `number > 0` が成り立つときは、
続くブロック内の文 `printf("positive number\n");` が実行されます。
条件式が成り立たないときは、`else if` に続く条件式 `number < 0` が評価されます。
この条件式 `number < 0` が成り立つときは、
続くブロック内の文 `printf("negative number\n");` が実行されます。
最初の条件式も、2 番目の条件式も成り立たないときは、
最後の `else` に続くブロック内の文 `printf("zero\n");` が実行されます。

このプログラムの処理の流れを示すフローチャートを次に示します。

![flowchart](./assets/flowchart_chap06_posnegzero.drawio.png)

プログラムの実行結果を示します。
1 行目は、入力された数値を表しています。
正の数を入力した場合は次のように、`positive number` と表示されます。

***`terminal`***
```
42
positive number
```

負の数を入力した場合は、`negative number` と表示されます。

***`terminal`***
```
-1
negative number
```

ゼロを入力した場合は、`zero` と表示されます。

***`terminal`***
```
0
zero
```

### 例題 6-4 : 複雑な条件式

if 文の条件式には、複数の条件を組み合わせることができます。
次のプログラムは、室温として実数値を入力したときに、
入力された数値が 15.0 以上 25.0 未満であれば、
`comfortable` と表示し、
そうでなければ `uncomfortable` と表示するプログラムです。

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

if 文の条件式 `15.0 <= temperature && temperature < 25.0` は、
論理積 `&&` ( AND ) で結合された 2 つの条件式 `15.0 <= temperature` と
`temperature < 25.0` が両方とも成り立つときに真となります。
すなわち、`temperature` が 15.0 以上 25.0 未満のときに真となります。

条件式を `15.0 <= temperature < 25.0` のようには記述しないことに注意してください。
このように記述すると意図した通りには動作しません。


プログラムの実行結果を示します。
1 行目の数値の部分は、入力された数値を表しています。

21.5 を入力した場合は、条件式が真となるので、
次のように、`comfortable` と表示されます。

***`terminal`***
```
temperature? 21.5
comfortable
```

30.0 を入力した場合は、条件式が偽となるので、
次のように、`uncomfortable` と表示されます。

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