# NeatChat
NeatChat是基于NextChat的一个全新的版本，并进行了多项优化。NeatChat目前有三个分支，分别是main分支，mini分支，preview分支。

preview分支是main分支的预览分支，在稳定之后会合并到main分支，mini分支是单独的一个精简分支（mini分支请移步至[NeatChat-Mini](https://github.com/tianzhentech/NeatChat-Mini)）。

main分支的使命在于优化UI和新增功能，以至于后面脱离NextChat，独立发展，而mini分支则会在NextChat的基础上进行微调和删减，紧跟NextChat的步伐，只有main分支特别重要的功能才会下放到mini分支。由于main分支和mini分支的目的不一样，所以也将有两套UI。

# 预览
![](https://raw.githubusercontent.com/tianzhentech/static/main/images/%7B326DD837-A2FE-4603-A289-47FD5FED329A%7D.png)
![](https://raw.githubusercontent.com/tianzhentech/static/main/images/%7B1FB6B249-72D5-42F0-B861-7FE95ADCEEEE%7D.png)
![](https://raw.githubusercontent.com/tianzhentech/static/main/images/%7B6656232E-09F3-472D-A2B4-621DDD57D9CC%7D.png)
> 更多内容请移步[演示站](https://neat.tz889.us.kg)

# 快速开始
1. 支持vercel一键部署：[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tianzhentech/NeatChat.git)

2. docker只需要替换官方**yidadaa/chatgpt-next-web:版本号**为**tianzhentech/chatgpt-next-web:latest**即可

> 详细使用请参考[NextChat](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
# 开发计划
> 以下不分先后顺序

<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; table-layout: fixed;">
  <tr>
    <th style="text-align: center; padding: 8px; border: 1px solid #ddd; width: 60px; min-width: 60px; white-space: nowrap;">序号</th>
    <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">详情</th>
    <th style="text-align: center; padding: 8px; border: 1px solid #ddd; width: 80px; min-width: 80px; white-space: nowrap;">优先级</th>
    <th style="text-align: center; padding: 8px; border: 1px solid #ddd; width: 100px; min-width: 100px; white-space: nowrap;">预计时间</th>
    <th style="text-align: center; padding: 8px; border: 1px solid #ddd; width: 80px; min-width: 80px; white-space: nowrap;">状态</th>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">1</td>
    <td style="padding: 8px; border: 1px solid #ddd;">去除广告，精简语言包，调整UI，适配更多视觉模型</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2-3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">已完成</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2</td>
    <td style="padding: 8px; border: 1px solid #ddd;">全平台打包（Windows、Mac、Linux、Android、iOS、Docker）</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">1天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">暂时搁置中，只打包了windows和docker，其余暂时可以用pwa替代</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">3</td>
    <td style="padding: 8px; border: 1px solid #ddd;">开启preview分支，提前体验新功能，preview分支会定期合并到main分支</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">1天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">已完成</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">4</td>
    <td style="padding: 8px; border: 1px solid #ddd;">增加多彩主题（支持启动时或者启动后切换基本色）</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">积极</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">即将开启</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">5</td>
    <td style="padding: 8px; border: 1px solid #ddd;">增加Neat模式（改善在移动设备上的使用体验）</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">计划中</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">6</td>
    <td style="padding: 8px; border: 1px solid #ddd;">开启mini分支，去除面具，实时语音等不常用功能</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">已完成</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">7</td>
    <td style="padding: 8px; border: 1px solid #ddd;">改进聊天记录同步功能</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2-3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">计划中</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">8</td>
    <td style="padding: 8px; border: 1px solid #ddd;">优化本地消息过多导致的流式变慢问题</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2-3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">计划中</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">9</td>
    <td style="padding: 8px; border: 1px solid #ddd;">增加上传文件功能，改进由于发送文本过长导致的输入框卡顿问题</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">次级</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2-3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">即将开启</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">10</td>
    <td style="padding: 8px; border: 1px solid #ddd;">新增对多种模型avatar的适配</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">积极</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2-3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">已完成</td>
  </tr>
    <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">11</td>
    <td style="padding: 8px; border: 1px solid #ddd;">适配Lobe Icons，新增模型搜索功能（可关闭）</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">积极</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">2-3天</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">已完成</td>
  </tr>
  <tr>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">......</td>
    <td style="padding: 8px; border: 1px solid #ddd;">各位朋友们的建议</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">......</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">......</td>
    <td style="text-align: center; padding: 8px; border: 1px solid #ddd;">......</td>
  </tr>
</table>

# 打包说明
由于preview分支会定期合并到main分支，为了避免造成不稳定的体验，也为了避免浪费过多的打包时间，所以目前所有平台只会打包main分支，也即只会打包正式版而不是预览版，preview更新的内容还请各位自行下载源码体验。

<div style="width: 100%;">
  <a href="https://star-history.com/#tianzhentech/ChatGPT-Next-Web&Date">
    <img src="https://api.star-history.com/svg?repos=tianzhentech/ChatGPT-Next-Web&type=Date" style="width: 100%; height: auto;">
  </a>
</div>
