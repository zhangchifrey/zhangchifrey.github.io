# 张驰个人学术主页 / Personal academic website of Chi Zhang

这是一份静态网页，无需安装或编译。用浏览器打开 `index.html` 即可预览，也可直接部署到 GitHub Pages 或其他静态托管。

This is a static site with no build step. Open `index.html` in a browser to preview it, or publish the folder to GitHub Pages or any static host.

默认语言为中文，导航栏右侧可切换 English。语言选择会保存在浏览器的 localStorage 中，也可以使用 `?lang=en` 或 `?lang=zh` 打开对应语言。

The default language is Chinese. Use the 中文 / English toggle in the header; the choice is remembered in localStorage. You can also open `?lang=en` or `?lang=zh`.

---

## 本地预览 / Preview locally

1. 解压压缩包（或进入本文件夹），确认可以看到 `index.html`、`css/`、`js/`、`assets/`。
2. 双击 `index.html`，用浏览器打开即可。
3. 如需本地服务器（可选）：

```bash
# 在本文件夹中运行 / run this inside the site folder
python3 -m http.server 8000
```

然后访问 http://localhost:8000 。网页引用了 Google Fonts 与 Font Awesome，首次打开需要联网；字体与图标加载完成后，版式会更完整。正文、照片和简历不依赖外网。

Then visit http://localhost:8000. The page loads typefaces from Google Fonts and icons from Font Awesome, so a network connection is needed for the typography and icons to appear as designed. The text, portrait, and CV work offline.

---

## 发布到 GitHub Pages / Publish on GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `chi-zhang` 或 `username.github.io`（若使用 `username.github.io` 作为仓库名，网站会发布在 `https://username.github.io/`）。
2. 将**本文件夹中的全部内容**（`index.html`、`css/`、`js/`、`assets/`、本 README）上传到仓库根目录，不要再套一层 `site/` 文件夹。可用 GitHub 网页上传，或在本地执行：

```bash
git init
git add .
git commit -m "Add personal academic website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages**。在 **Build and deployment** 中选择 **Deploy from a branch**，Branch 选 `main`，Folder 选 `/ (root)`，保存。
4. 数分钟后，网站会出现在：
   - `https://<your-username>.github.io/<your-repo>/`，或
   - `https://<your-username>.github.io/`（若仓库名是 `username.github.io`）。
5. 如需绑定个人域名，在 Pages 设置中填写 Custom domain，并按提示在域名服务商处添加 DNS 记录。

There is no Node.js, npm, or build command. Do not upload a parent folder that only contains this directory; `index.html` must sit at the root of the publishing source.

其他静态托管（Cloudflare Pages、Netlify、Vercel、学校提供的个人空间等）同样只需上传本文件夹内容，将发布目录指向该文件夹即可。

The same files can be uploaded to Cloudflare Pages, Netlify, Vercel, or a university personal-pages host. Point the publish directory at this folder.

---

## 以后如何改内容 / Editing later

- 修改文字、论文条目或联系方式：编辑 `index.html`。中英文写在成对的 `<span class="lang-zh">` 与 `<span class="lang-en">`（或带同样 class 的段落）中，请两处一起改。
- 更新简历：用新的 PDF 替换 `assets/Chi_Zhang_CV.pdf`，文件名保持不变。当前简历为 2026 年 8 月版。
- 更换照片：替换 `assets/chi-zhang.jpg`（建议接近正方形的肖像）。
- 调整样式：编辑 `css/style.css`。语言切换、移动端菜单与导航高亮在 `js/main.js`。
- 页脚的“最近更新”需要你在改过内容后手动修改。

Edit copy in `index.html` (keep the Chinese and English versions in sync). Replace `assets/Chi_Zhang_CV.pdf` or `assets/chi-zhang.jpg` in place. Styles live in `css/style.css`; the language toggle, mobile menu, and section highlighting live in `js/main.js`. Update the “Last updated” line in the footer when you make changes.

---

## 文件结构 / File structure

```
index.html              网页正文 / the site
css/style.css           样式 / styles
js/main.js              语言切换与导航 / language toggle and nav
assets/chi-zhang.jpg    照片 / portrait
assets/Chi_Zhang_CV.pdf 简历（2026年8月版）/ CV (August 2026)
assets/favicon*.png     站点图标 / favicons
README.md               本说明 / this file
```
