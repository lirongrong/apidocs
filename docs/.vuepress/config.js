module.exports = {
    title: 'Fighting',
    // base:'/study/',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text:'前端',
                items:[
                    {text:'小程序', link:'/webapp/'}
                ]
            },
            {
                text: 'API文档',
                items: [
                    { text: 'sparta', link: '/sparta/' },
                    { text: 'erp', link: '/erp/' },
                    { text: 'touyi', link: '/touyi/' },
                    { text: 'h5', link: '/h5/' }
                ]
            },
            { text: '关于', link: '/about/' },
            // { text: 'Github', link: 'https://www.github.com/codeteenager' }
        ],
        sidebar: {},
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'vuejs/vuepress',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: false
    },
}