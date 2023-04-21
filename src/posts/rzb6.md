---
cover: /deeplearning.jpg
icon: edit
date: 2023-04-15
category:
  - 神经网络
tag:
  - 多层
star: true
sticky: true
---

# 感知机

![](/deeplearning,jpg)

## 多层感知机

多层感知机由感知机推广而来，最主要的特点是有多个神经元层，因此也叫深度神经网络。相比于单独的感知机，多层感知机的第i ii层的每个神经元和第i − 1 i-1i−1层的每个神经元都有连接。

### 前向传播和反向传播介绍

神经网络的计算主要有两种：前向传播（foward propagation, FP）作用于每一层的输入，通过逐层计算得到输出结果；反向传播（backward propagation, BP）作用于网络的输出，通过计算梯度由深到浅更新网络参数
