项目介绍

    `yarn install`

    `yarn start`

    `yarn build`

工程目录

    public
        favicon.ico     ------   浏览器头部logo
        index.html      ------   项目首页模板
        manifest.json   ------   PWA serviceWoker 网页用户访问存储到手机的参数配置 在后台管理项目中没有作用
        api
            headerList.json ------  测试数据
            home.json       ------  测试数据


    src
        index.js        ------   程序入口文件

    pages               ------   各个展示页面
        home
            store       ------   存储单独页面数据
                actionCreators.js
                constants.js
                index.js
                reducer.js
            index.js    ------   home页面

    store
        index.js        ------   redux 入口文件
        reducer.js      ------   改变state函数  

    node_modules        ------   依赖第三方包文件

    .gitignore          ------   git 忽略文件

    package.json        ------   node包文件

    README.md

    yarn.lock           ------   项目依赖安装包版本号



    react 生态:  react + redux  + react-router-dom + redux-immutable + immutable +  axios + react-transition-group + babel + webpack