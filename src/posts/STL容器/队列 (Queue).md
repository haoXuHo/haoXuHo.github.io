---
icon: edit
date: 2023-04-19
---

# 队列 (Queue)
## 外特性：先进先出(FIFO)
* 数组实现：元素queue[maxn]，队首head，队尾tail  
&emsp;入队：queue[tail++] = element;  
&emsp;出队：element = queue[head++];  
&emsp;队空条件：head >= tail  

## STL (Standard Template Library)
```c
#include &lt;queue&gt;  
using namespace std;  
queue&it;int&gt; q;  
int x = q.front();  
q.push(x); q.pop(); q.empty(); q.size();  
```
## 队列的应用
广度优先搜索 （Breadth-first Search）  
……  
## 扩展  
循环队列 （Circular Queue）  
最短路的SPFA算法 (Shortest Path Faster Algorithm)  	
双端队列 （Double Ended Queue）  
例：Sliding Window  
对某些动态规划（Dynamic Programming）  
 算法进行优化  


