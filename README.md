# react ui 组件库
资料参考：
- https://langliu.github.io/posts/vite-component-library/
- icons: https://mui.com/material-ui/material-icons/

## 安装与使用

### 1. 安装
在前端项目中使用 `npm` 或者 `yarn` 命令进行安装
```bash
# use npm
npm install @xie-work/react-ui
# use yarn
yarn add @xie-work/react-ui
```

### 2. 使用
```typescript
import {Button} from '@xie-work/react-ui'

const App = () => {
    return (
        <div>
            <Button>这是一个按钮</Button>
        < /div>
    )
}
```


## 主题

框架支持自定义主题：
```typescript
import {setTheme} from "@xie-work/react-ui";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        setTheme({primary: 'red'})
    }, [])
    return (
        <div>
            <Button>这是一个按钮 < /Button>
        < /div>
    )
}
```

## 组件列表

### 布局组件模块

#### 1.Container，Aside 布局切分组件

#### 2.Flex flex布局组件

### 展示组件模块

#### 1.TreeMenu 菜单树组件

#### 2.WaveRipple 波纹效果组件

#### 3.Slider

### 输入组件模块

#### 1.Button 按钮组件

## 组件模板
框架支持创建组件模板

```typescript
import {matrix,Button} from "@xie-work/react-ui";

const TopButton = matrix(Button, {size: 'large'})

const App = () => {
    return (
        <div>
            <TopButton>这是一个模板按钮 </TopButton>
            <TopButton>这是一个模板按钮 </TopButton>
            <TopButton>这是一个模板按钮 </TopButton>
        < /div>
    )
}
```
