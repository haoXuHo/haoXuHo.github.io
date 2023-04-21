---
icon: edit
date: 2023-04-19
category:
  - notes
tag:
  - 学习学习学习！
---

# css

## 介绍

CSS（Cascading Style Sheets）是一种用于描述网页内容显示样式的语言。下面是一个简单的CSS样式规则示例：

```css
p {
  color: red;
  font-size: 18px;
}
```
这个规则将应用于HTML文档中的所有段落元素。它指定了两个属性：颜色和字体大小。可以通过选择器指定应用样式的元素。

### 笔记来啦
#### 1.选择器
选择器用于选择要应用样式的HTML元素。常见的选择器有：

-标签选择器：选择所有使用相同标签的元素。

```css
p {
  color: red;
}
```

-ID选择器：选择具有特定ID的元素。

```css
#myId {
  background-color: yellow;
}
```
-类选择器：选择具有特定类的元素。

```css
.myClass {
  font-size: 18px;
}
```
-后代选择器：选择某个元素的后代元素。

```css
div p {
  color: green;
}
```

-邻兄弟选择器：选择紧接在另一个元素后面的元素。

```css
h2 + p {
  font-weight: bold;
}
```

#### 2.属性和值
属性用于指定要修改的样式属性，值用于指定该属性的值。常见的属性和值有：

-颜色属性color：用于设置文本颜色。

```css
p {
  color: red;
}
```

-背景属性background：用于设置背景颜色和图片。

```css
body {
  background-color: lightblue;
  background-image: url("bg.jpg");
}

```
-字体属性font：用于设置字体系列、大小、粗细和样式。

```css
h1 {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
}
```

-盒模型属性：用于设置元素的边框、内边距和外边距。

```css
div {
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
}
```
<!-- #### 声明和规则
声明由属性和值组成，用花括号括起来，形成样式规则。每个规则可以应用到一个或多个选择器。例如：
```css
h1, h2 {
  color: blue;
  font-size: 24px;
}
```
这个规则将应用于所有<h1>和<h2>元素，将文本颜色设置为蓝色，字体大小设置为24像素。

#### 优先级

当多个规则应用于同一个元素时，优先级决定哪个规则将应用。CSS优先级按照以下规则： -->

-重要声明（使用!important关键字）。

-内联样式（使用style属性）。

-ID选择器。

-类选择器、属性选择器和伪类。

-元素选择器和伪元素。

例如，下面这个规则中的内联样式将覆盖其他选择器：

```css
<p class="myClass" style="color: green;">这是一段绿色文本。</p>
```

(暂时就这些啦)


##### created by 徐浩
