# 简介

- 简易自适应移动端(根据screen.availWidth对比视觉稿宽度进行缩放)

# 用例

- 根据自定义meta标签，通过data-content-width设置视觉稿基准px
- 建议在head头部引入此js

````html
    <meta data-name="scale" data-content-width="750">
    <script src="scale.js"></script>
````