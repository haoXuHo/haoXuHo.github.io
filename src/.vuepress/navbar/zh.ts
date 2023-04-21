import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // 每个条目都应该包含{} 括号里面应该包含文字text 图标icon 链接link
  // prefix 上级目录的意思吧
  // { text: "演示", icon: "discover", link: "/demo/" },
  // 没有prefix的 不会显示下拉列表 而是只有link跳转对应链接
  {
    text: "这里是我们组每个人的博文目录",
    icon: "edit",
    prefix: "/posts/", // 有这个就能跳转目录了
    children: [ // 子项目的意思
   
      {
        text: "杨林",
        icon: "edit",
        prefix: "STL容器/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "队列", icon: "edit", link: "队列 (Queue)" },
          { text: "简介", icon: "edit", link: "简介" },
          { text: "栈", icon: "edit", link: "栈 (Stack)" },
        ],
      },
      {
        text: "杨林",
        icon: "edit",
        prefix: "树(Tree)/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "并查集", icon: "edit", link: "并查集" },
          { text: "线段树", icon: "edit", link: "线段树" },
          { text: "字典树", icon: "edit", link: "字典树" },
        ],
      },
      {
        text: "黄楠",
        icon: "edit",
        children: [ // 子项目和上级目录可以嵌套
          { text: "html", icon: "edit", link: "MyBlog" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
        ],
      },
      {
        text: "任振邦",
        icon: "edit",
        prefix: "深度学习的思想/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "任振邦1", icon: "edit", link: "1" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
        ],
      },
      {
        text: "任振邦",
        icon: "edit",
        prefix: "应用/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "任振邦1", icon: "edit", link: "1" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
          { text: "任振邦3", icon: "edit", link: "3" },
        ],
      },
    
      {
        text: "徐浩",
        icon: "edit",
        prefix: "notes/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "markdown", icon: "edit", link: "1" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
          { text: "css", icon: "edit", link: "cherry" },
        ],
      },
      {
        text: "徐浩",
        icon: "edit",
        prefix: "电影推荐/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "classic", icon: "edit", link: "1" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
        ],
      },
      {
        text: "徐浩",
        icon: "edit",
        children: [ // 子项目和上级目录可以嵌套
          { text: "风景", icon: "edit", link: "strawberry" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
          { text: "up主推荐", icon: "edit", link: "dragonfruit" },
        ],
      },

      {
        text: "李北川",
        icon: "edit",
        prefix: "chatgpt/",
        children: [ // 子项目和上级目录可以嵌套
          { text: "介绍", icon: "edit", link: "1" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
        ],
      },
      {
        text: "李北川",
        icon: "edit",
        children: [ // 子项目和上级目录可以嵌套
          { text: "书推荐", icon: "edit", link: "cherry" }, // 不命名和不声明图标 则使用默认图标 和上级目录+文件名的形式
        ],
      },
    ],
  },
  {
    text: "心情不好就点这个",
    icon: "note",
    link: "https://www.bilibili.com",
  },
]);
