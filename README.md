# xutapd-fe
为高效打通师生线上一体化作业解决方案。
# 代码规范
使用eslint进行代码检测，使用prettier进行格式化文件
eslint扩展自airbnb: [airbnb规范文档](https://github.com/lin-123/javascript)
* 默认可以使用console，发布代码时会关闭
* 2个字符缩进
* 默认使用单引号
* 数组元素之间需要一致地使用的换行符
* 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
* 行尾不加分号
* 要求花括号内有空格
# 组件库
使用naive-ui
[github地址](https://github.com/TuSimple/naive-ui/blob/main/README.zh-CN.md)
[使用文档](https://www.naiveui.com/zh-CN/os-theme)
# 项目目录
+ script: 脚本文件
+ src
  + assets: 静态资源
  + components: 自定义组件
  + plugins: 插件
    + naive: 按需导入naive组件，有利于treeshake
  + views: 界面
  + router：路由文件
  + App.vue: 组件入口
  + main: 项目入口