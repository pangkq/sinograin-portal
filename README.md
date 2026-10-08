# 中储粮学习平台门户

本地开发地址：`http://localhost:8887/`

```powershell
npm run dev
```

入口路径保持在当前标签页跳转：

| 页面 | 本地地址 |
| --- | --- |
| 学习平台门户 | `http://localhost:8887/` |
| e学堂 | `http://localhost:8888/` |
| 网上党校 | `http://localhost:8889/` |

门户为无构建步骤、无第三方运行依赖的静态页面。`index.html` 是首页，点击后进入 `default.html` 平台选择页；`dev-server.js` 使用 Node.js 内置模块提供本地服务。

页面样式位于 `css/globals.css` 和 `css/style.css`，背景图分别为 `img/home.jpg` 和 `img/default_bg01.jpg`。样式与图片沿用 `PartySchool` 原型，项目仅保留门户实际使用的资源。

e学堂与网上党校在不同端口运行，现阶段各自保留登录状态和业务接口。
