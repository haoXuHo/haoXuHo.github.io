---
icon: edit
date: 2023-04-19
---

# 栈 (Stack)
## 外特性：后进先出(LIFO)
* 逻辑结构：只在一端操作的线性表  
* 数组实现：元素 stack[maxn];   
&emsp; &emsp;栈顶指针 top;  
&emsp; &emsp;入栈(push)：stack[top++] = element;  
&emsp; &emsp;出栈(pop)：element = stack[--top];  
&emsp; &emsp;空栈条件：top == 0  
## STL (Standard Template Library)
```c
#include &lt;stack&gt;  
using namespace std;  
stack &lt;int&gt; s;  
int x = s.top();  
&emsp;s.push(x);  
&emsp;s.pop();  
&emsp;s.empty();   
&emsp;s.size(); 
```
## 栈的应用
保护现场 (系统栈)  
括号匹配  
表达式求值 （The shunting yard algorithm）  
深度优先搜索 （Depth-first Search）  



