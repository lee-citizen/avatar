
##   前言

>最近微信换头像比较火爆，国旗，渐变头像比较好看，于是自己也决定做一个


##  1、先上图


####  小程序
<img src="https://img-blog.csdnimg.cn/61f4ba79594542dd8f523a481f3672ae.jpg"   width="600px" />

![在这里插入图片描述](https://img-blog.csdnimg.cn/5953c4b61d744b19a4b2e607cff72b53.jpg?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_9,color_FFFFFF,t_70,g_se,x_16#pic_center)



#### 后台管理
![在这里插入图片描述](https://img-blog.csdnimg.cn/a1c2826c06a444a09482b93e010c611f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c16ba6655dbc471ba6cb21b7d54eef1e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)





## 2、准备工作

一、申请一个小程序
申请地址：微信公众平台，
申请小程序的操作很简单，大家百度一下跟着步骤申请就行，某宝上还有认证小程序代申请代认证，老铁们可以自行选择。

二、下载微信开发者工具
下载地址：[https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131164157184.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)

三、下载解压HBuilderX

下载地址：[https://www.dcloud.io/hbuilderx.html](https://www.dcloud.io/hbuilderx.html)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131164122814.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)



## 3、搭建开始
`请确保 HBuilderX 更新到最新版`


一、[小程序源码地址](https://ext.dcloud.net.cn/plugin?id=6865)，点击购买普通授权版本，只需要`5.88`

## `作者承诺只要购买了加qq:2214904953一条龙技术服务，包成功上线`

二、我这里云空间叫`demo`,如果没有新建个阿里云空间即可（[创建 uniCloud 服务空间](https://uniapp.dcloud.io/uniCloud/quickstart?id=%e5%88%9b%e5%bb%ba%e5%92%8c%e7%bb%91%e5%ae%9a%e6%9c%8d%e5%8a%a1%e7%a9%ba%e9%97%b4)），右键uniCloud目录关联到与管理后台同一个服务空间，全部勾选，点击直接部署服务空间，导入HBuilderX 
![在这里插入图片描述](https://img-blog.csdnimg.cn/937a454e3b3d43d4b59ee2cdf6e29253.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5LiA5Liq5a2X5bCx5piv5bmy,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
打开文件 `uniCloud => cloudfunctions => user_mpweixin => index.js`  
配置 你自己的 appid 和 secret（在微信小程序官方的后台获取）

三、项目安装依赖

项目根目录 `npm install` 安装依赖


四、配置项目
1、打开微信微信开发者工具，在安全设置中打开服务端口
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021013117151419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131171524170.png#pic_center)

2、打开HBuilderX，点击“运行-运行到小程序模拟器-运行配置”中设置你安装微信开发者工具的路径。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131171947775.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131171956811.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)
## 四、发布小程序
1、右键项目文件夹，点击“发行-小程序-微信（仅适用于uniapp）”
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131172532426.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)

2、填写小程序名称和小程序appid即可唤起微信开发者工具。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210131172604321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMzQwODc3,size_16,color_FFFFFF,t_70#pic_center)


3、在小程序后台，开发管理中配置合法域名：
- （1）`https://api.bspapp.com `
- （2）`https://thirdwx.qlogo.cn` 
- （3）`https://vkceyugu.cdn.bspapp.com` 
- （4）`https://wx.qlogo.cn`

 如下图所示 
![在这里插入图片描述](https://img-blog.csdnimg.cn/c204b5812896422ba832a69954b2c50c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)

4、提供购买订单号,联系作者`（qq:2214904953）` 获取后台管理系统代码和头像素材图片

5、在微信开发者工具点击上传，在小程序后台提交审核，审核通过后即可正常运营


![在这里插入图片描述](https://img-blog.csdnimg.cn/4d2e28513f9c48dfbef64d78cf42c789.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)





 
 ## 最后
 小程序可开通流量主，达到开通条件可以选择开通流量主 即可躺着赚钱 ，
 贴一张大佬的流量主收益图，只要你能推广，赚钱很容易。

![在这里插入图片描述](https://img-blog.csdnimg.cn/c2e1226d357a40f0bfc5e3f4fc486bd3.jpg?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44CK5oqA5pyv6LWa5a6i5ZCn44CL,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


##  用问题的联系作者帮忙解决QQ：2214904953

## 关注公众号  《技术赚客吧》  全网优质项目首发,一起赚吧

![在这里插入图片描述](https://img-blog.csdnimg.cn/84466a21b6064011983415013b10d52a.jpg#pic_center)


#### 作者相关文章

[反编译获取任何微信小程序源码——看这篇就够了](https://blog.csdn.net/qq_32340877/article/details/110993362) 

[零成本，零基础搭建获利的影视小程序](https://nxmin.blog.csdn.net/article/details/120310802)

[零基础搭建智能垃圾分类小程序(可做毕设，可加入流量主，赚取零花钱)](https://nxmin.blog.csdn.net/article/details/121436270)


