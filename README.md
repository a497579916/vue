# 这是一个 VUE

# Vue项目

#### 介绍
Vue项目



## 制作首页APP组件
1.完成header区域 ，使用的是 mint ui 中的header组件
2.制作底部的tabbar 区域 使用的mui的 tabber.html
    + 在制作购物车 小图标的时候 操作会相对多一些：
    + 先把 扩展的图标css样式要拷贝到项目中
    + 拷贝扩展字体库 ttf 文件到项目中
    + 为购物车 小图片添加扩展如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
3.要在 中间区域放置一个 router-view 展示中间部分 



## 改造 tabbar 为router-link

## 设置路由高亮

## 点击tabbar 中的路由链接 展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据  如何获取 使用vue-resource
2.使用Vue-resource 的this.$http.get获取数据
3.获取到的数据，要保持到 data 身上
4。使用v-for 循环渲染每个item项目

## 改造九宫格

## 改造 新闻咨询 路由链接

## 新闻资讯 页面 制作 
1.绘制页面  使用 MUI中的 media-list.html
2.使用 vue-resouuce 来获取数据
3.渲染界面


## 实现新闻咨询列表点击调转到 新闻详情
1.把列表中的每一项改造为 router-link 同时 再跳转的时候应该提供唯一的ID标识符
2.创建一个新闻详情的组件页面NewsInfo.vue
3.在路由模块中 将 新闻详情的路由 地址和组件页面对应起来

## 实现 新闻详情的 页面 布局 和渲染


## 单独封装一个 comment.vue 评论子组件
1.先创建一个 单独的 comment.vue 组件模板
2.在需要使用 comment 组件的页面中 先手动导入 comment组件
  + 'import comment from 'comment.vue'
3.在父组件中,使用 components 属性 将刚才导入的comment组件 注册为自己的子组件
4.将注册子组件的时候，注册名称 以标签形式 引入

## 获取所有的评论数据显示到页面中
1.getComments


## 实现点击 加载更多评论的功能
1.为加载更多按钮 绑定点击事件 在事件中 请求 下一页数据
2.d点击加载更多 让pageIndex++ 让后重新调用 getComments 方法 重新获取一页
3.为了防止新数据 覆盖老数据的情况 我们在 点击加载更多的时候，每当获取到新数组 应该让老数据 调用数组的 concat 方法 拼接上新数组

## 发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定事件
3.校验评论内容是否为空，如果Toast为空则提示用户 不能为空
4.通过 Vue-resource 发送请求 ，把提交内容给服务器保存
5.当发表评论OK后，重新刷新列表 以查看最新评论
  + 如果调用 get Comments 方法 重新刷新评论列巴的话 可能只能得到最后一页的评论 前几页的评论获取不到
  + 换一种思路  当评论成功后 在客户端 手动拼接出一个最新的评论对象 然后调用数组的unshitf方法   把最新的评论 追加
    到 data 中 comments的开头，这样技能完美实现刷新评论列表的需求

## 改造图片 分析 按钮为 路由的链接并显示对应的组件页面

## 绘制图片列表 组件页面结构并美化样式
1.顶部的滑动条制作
2.制作 底部的图片 列表
### 制作顶部滑动条的坑们
1.需要借助MUI 的 tab-top-webview-main.heml 
2.需要把 slider 区域的 mui-fullscreen 类 去掉
3.滑动条无法正常触发滑动  通过检查 官方文档 发现这是js组件 需要初始化一下
  + 第一步 导入 mui.js
  + 调用官方提供 方式 去初始化
  ```
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
4.我们在初始化滑动条的时候 , 导入了 mui.js 但是 控制台报错
Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode
  + 经过排查 觉得,可能是mui.js中 用到了 'caller', 'callee', and 'arguments' 但是 webpack打包好的bundle.js中是默认启用严格模式 
  + 解决方案 : 1.把mui.js中 的 非严格 模式 的代码改掉 但是不现实
              2.把webpack 打包的严格模式禁用掉
  + 最终 选择了 第二种方案, 移除严格模式  使用这个插件
  cnpm i babel-plugin-transform-remove-strict-mode -D

  5.刚进入 图片分享的时候 滑动条无法正常工作,结果分析 发现如果要 初始化滑动条 必须要dom元素加载完毕 所有 我们把初始化 放在mounted生命周期函数中

6.当滑动条 调试ok后 发现 tabbar 无法正常工作了，这时候我们要把每个tabbar按钮的样式中的 mui-tab-item 重新改一下名字

7.获取所有分类 并渲染所有列表

### 制作图片列表区域
1.图片列表需要使用懒加载技术 ，我们可以使用MintUi 提供的组件 lazy-load
2.工具lazy-load  的使用文档 尝试使用
3.渲染图片列表数据

### 实现了 图片列表的懒加载改造和样式梅花

## 实现了 点击图片 跳转到 图片详情页面
1.在改造 li 成router-link 的时候，需要使用tag属性指定要渲染为哪种元素

## 实现详情页面的布局 和 美化 同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能
1.使用 插件vue-preview 这个插件缩略图
2.获取到所有的图片列列表，然后使用V-for指令渲染
3.注意：img class 不能去掉
4.注意：每一个图片数据对象中必须有 W 和 H 属性


## 绘制商品列表结构

## 尝试在手机上 尝试 预览和测试
1.保证手机可以运行；
2.手机和电脑处于同一局域网下，
3.打开自己的项目 package.json 在dev脚本中 添加一个 --host指令 把当前电脑的wifiip 地址 设置为--host 指令值