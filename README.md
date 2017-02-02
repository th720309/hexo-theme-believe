# hexo-theme-believe

这个主题取名believe.希望选用这个主题的人永远相信美好的事情即将发生。


## ScreenShot
![Daily](http://oct3pmpde.bkt.clouddn.com/fengmian.jpg)

## Usage
1. In the `root` directory:
    ```git
    $ git clone https://github.com/th720309/hexo-theme-believe.git
    $ npm install --save hexo-renderer-sass
    ```

2. Change the `theme` property in the `config.yml` file.
    ```yml
    # theme: landscape
    theme: hexo-theme-believe
    ```

3. Run: `hexo server`


##Configuration
     


----------


```
# basic
title: believe
subtitle: 笔直向前，说到做到
favicon: /favicon.ico

#logo
logo: http://oct3pmpde.bkt.clouddn.com/timg.jpg

# duoshuo-comment
#duoshuo_shortname: th720309

highlight:
  enable: true
  line_number: false
  auto_detect: false
  tab_replace:

# nav #
nav:
  首页: .
  归档: archives
  关于: about
  项目: project
  RSS: atom.xml

# baiduanalysis
  #baiduanalysis: 

# hexo-renderer-sass
node_sass:
  outputStyle: nested
  precision: 5
  sourceComments: false

# Default post title
default_post_title: Untitled

# social
social:
  github: https://github.com/th720309
  weibo: http://weibo.com/th0527
  twitter: https://twitter.com
  facebook: https://facebook.com

footer: Powered by <a href="https://hexo.io/">Hexo</a> with Theme <a href="http://www.tianhao.site/blog">believe</a>
```

##Features


----------

How to add comment field in your article?
-----------------------------------------

    
  编辑站点的 config.yml ，添加 duoshuo_shortname 字段，设置如下  
             
    # duoshuo-comment
        duoshuo_shortname: 此处为你的多说帐号
           　

How to add baiduanalysis in your website?
-----------------------------------------

        
     # baiduanalysis(用于百度站长工具验证所有权的ID)
        (sample)baiduanalysis:  https://hm.baidu.com/hm.js?c0451e16533956173997b85f7a8de666
           

How to customize page footer?
-----------------------------

编辑站点的 _config.yml，添加

     footer: 你要自定义的内容（支持HTML标签）
      # 举例：
     # footer:  Powered by <a href="https://hexo.io/">Hexo</a> with Theme <a href="http://www.tianhao.site/blog">believe</a>

