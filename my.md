## 基于 Vue+Element 实现的后台管理系统搭建模板

## 数据采用 [fastmock](https://www.fastmock.site/#/) 模拟数据

### 目前实现的主要功能：

1. 简单的登录功能
2. Header 头部组件
3. Side 菜单，可伸缩
4. 内置标签
5. 简易的表格样式，包括增删改查等基本功能
6. dialog 的封装
7. table 的封装

### 本文主要介绍内置标签的实现：

#### 内置标签主要基于 Vuex 实现状态管理和本地缓存结合实现

#### 首先结合浏览器标签的效果主要实现的功能有

1. 点击菜单栏后判断当前页面是否已经打开 ？ 跳转到已打开的标签 ： 新增一个标签
2. 标签可以删除，还应该包含删除所有标签和删除其他标签的功能
3. 同时显示的标签有数量限制，数量超过后会给予提示
4. 刷新后，当前页面及对应标签应该保留
5. 刚进入系统时应该显示首页标签，当所有标签关闭后应该跳转到首页
6. 标签之间切换时，如果当前标签没有关闭，则应该保留用户在当前标签的操作（使用 Vue 自带的 keep-alive 实现）

#### 新增标签具体实现如下

```
    //添加tab
    addTabs(state, value) {
      let JS = JSON.stringify
      //将当前页面存在session中，解决vuex数据刷新后初始化的问题
      sessionStorage.setItem('currentTag', JS(value))
      //要打开的页面标签是否已经存在 ？ 跳转 ： 加入数组
      if (JS(state.tabs).indexOf(JS(value)) < 0) {
        state.tabs.push(value)
      } else {
        state.selectTag = value
      }
      //判断是否超过最多同时打开的标签数目
      if (state.tabs.length < state.tabNum) {
        state.canAdd = true
      } else {
        state.canAdd = false
      }
    }

```

#### 删除标签具体实现如下

```
    //删除tab
    closeTab(state, value) {
        //判断要删除的标签是否存在
      if (state.tabs.indexOf(value) > -1) {
        state.tabs.splice(state.tabs.indexOf(value), 1)
        state.canAdd = true
        //如果当前打开的标签只有一个，则删除当前标签后应该跳转到首页标签
        if (!state.tabs.length) {
          state.tabs.push(state.tabIndex)
        }
      }
    }

```

### 其他具体实现可以参考[github 项目源码](https://github.com/BLZC/vue-template)
