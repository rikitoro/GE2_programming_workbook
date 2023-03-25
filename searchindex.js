Object.assign(window.search, {"doc_urls":["chapter_1.html#第-1-章--序論","chapter_1.html#13-コンピュータに仕事をさせるための手順","chapter_1.html#例題-1-1--プログラムの作成コンパイル実行"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":3,"title":1},"1":{"body":0,"breadcrumbs":3,"title":1},"2":{"body":64,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"Chapter 1 » 第 1 章 : 序論","id":"0","title":"第 1 章 : 序論"},"1":{"body":"","breadcrumbs":"Chapter 1 » 1.3 コンピュータに仕事をさせるための手順","id":"1","title":"1.3 コンピュータに仕事をさせるための手順"},"2":{"body":"C 言語でプログラムを作成してコンパイルを行って実行コードを生成し、実行するまでの手順を体験してみましょう。 初めにソースコードを作成します。エディタ(Emacs, Vim, VSCode など)で、次のプログラムを作成を作成し、ファイル名を first.c として保存します。 なお、 C 言語のソースコードのファイル(ソースファイル)の拡張子は .c とする必要があります。 first.c #include <stdio.h> int main(void) { printf(\"This is my first C program!\\n\"); return 0;\n} 次に端末を開き、 gcc コマンドでソースファイルを指定してコンパイルを行います。コンパイルを行ってできる実行コードのファイル名は gcc コマンドの -o オプションで指定しましょう。 次のようにソースファイル main.c をコンパイルすると、プログラムに構文エラー(Syntax error)がなければ、実行コード first が作成されます。 terminal $ gcc main.c -o main\n$ ls\nfirst first.c 実行コード first を実行します。 プログラムに誤りがなければ、 This is my first C program! と表示され、改行されます。 terminal $ ./first\nThis is my first C program! ソースコードに構文エラー(文法上の誤り)があると、コンパイルに失敗し、コンパイラが次のようなエラーメッセージを表示します。 エラーメッセージをよく確認し、ソースコードを修正したうえで再度コンパイルを行いましょう。 terminal $ gcc first.c -o first\nfirst.c: In function ‘main’:\nfirst.c:4:42: error: expected ‘;’ before ‘return’ 4 | printf(\"This is my first C program!\\n\") | ^ | ; 5 | 6 | return 0; | ~~~~~~","breadcrumbs":"Chapter 1 » 例題 1-1 : プログラムの作成・コンパイル・実行","id":"2","title":"例題 1-1 : プログラムの作成・コンパイル・実行"}},"length":3,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"1":{".":{"3":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"4":{"df":1,"docs":{"2":{"tf":1.0}}},"5":{"df":1,"docs":{"2":{"tf":1.0}}},"6":{"df":1,"docs":{"2":{"tf":1.0}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"c":{"df":1,"docs":{"2":{"tf":2.6457513110645907}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"c":{":":{"4":{":":{"4":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.23606797749979}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":3.0}}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"c":{"c":{"df":1,"docs":{"2":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},".":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"!":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}}},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"1":{".":{"3":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":3,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":2.23606797749979}}},"4":{"df":1,"docs":{"2":{"tf":1.0}}},"5":{"df":1,"docs":{"2":{"tf":1.0}}},"6":{"df":1,"docs":{"2":{"tf":1.0}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"c":{"df":1,"docs":{"2":{"tf":2.6457513110645907}},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{".":{"c":{":":{"4":{":":{"4":{"2":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.23606797749979}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":3.0}}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"c":{"c":{"df":1,"docs":{"2":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},".":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"(":{"\"":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"!":{"\\":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}}},"s":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"title":{"root":{"1":{".":{"3":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});