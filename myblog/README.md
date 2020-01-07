# myblog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 自定义指令 钩子函数
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})

## 过滤实现搜索功能
1. 自定义过滤器
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

## 路由及参数
通过点击传过来id，根据id进行相应的跳转

## 数据存放到自己的数据库中

## 实现个人博客的删除与编辑功能

## 用axios替换vue-resource
npm install axios