import {defineConfig} from 'vitepress'
import ViteSitemap from 'vite-plugin-sitemap';


export default defineConfig({
    title: "FreeLink",
    description: "抱歉，目前您只能给双向联系人发送消息 双向机器人解决方案",
    sitemap: {
        hostname: 'https://blog.freelinktg.top',
    },
    head: [
        ['meta', {name: 'author', content: 'jizhuawugu'}],
        ['meta', {name: 'keywords', content: '双向机器人'}],
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    // Vite 配置
    vite: {
        plugins: [
            ViteSitemap({
                // sitemap 配置
                hostname: 'https://blog.freelinktg.to', // 替换为你的网站 URL
                exclude: ['/404.html'], // 排除不需要生成的页面
                // 其他配置选项
                changefreq: 'weekly', // 页面更新频率
                priority: 0.7, // 优先级
            })
        ]
    },
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            title: 'FreeLink',
            description: 'FreeLink 中文文档描述',
            themeConfig: {
                nav: [
                    {text: '文档', link: '/zh/brief/bot_introduce'},
                ],
                sidebar: [
                    {
                        text: '简介',
                        items: [
                            {
                                text: '🤖 什么是双向机器人？', link: '/zh/brief/bot_introduce'
                            },
                            {text: '🤔 为什么需要双向机器人', link: '/zh/document'},
                            {text: '➕ 快速新增机器人', link: '/introduction'},
                        ],
                    },
                    {
                        text: '功能介绍',
                        items: [
                            {
                                text: '用户管理', items: [
                                    {text: '编辑备注', link: '/getting-started'},
                                    {text: '编辑说明', link: '/getting-started'},
                                    {text: '显示备注', link: '/getting-started'},
                                    {text: '封禁', link: '/getting-started'},
                                    {text: '删除聊天记录', link: '/getting-started'}
                                ]
                            },
                            {text: 'TG会员管理', link: '/getting-started'},
                            {text: '键盘管理', link: '/introduction'},
                            {text: '命令管理', link: '/getting-started'},
                            {text: '欢迎词', link: '/introduction/'},
                            {text: '广播', link: '/getting-started'},
                            {text: '自动回复', link: '/getting-started'},
                            {
                                text: '付费聊天', link: '/getting-started', items: [
                                    {text: '口令支付', link: '/getting-started'},
                                    {text: 'USDT支付', link: '/getting-started'}
                                ]
                            },

                        ],
                    }
                ],
                socialLinks: [
                    {icon: 'telegram', link: 'https://t.me/xzkb_bot'}
                ]
            }
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            title: 'FreeLink English Documentation',
            description: 'FreeLink English Documentation',
            themeConfig: {
                nav: [
                    {text: 'Home', link: '/en/'},
                    {text: 'Examples', link: '/en/markdown-examples'}
                ],
                sidebar: [
                    {
                        text: 'Guide',
                        items: [
                            {text: 'Introduction', link: '/introduction'},
                            {text: 'Getting Started', link: '/getting-started'}
                        ]
                    }
                ],
                socialLinks: [
                    {icon: 'telegram', link: 'https://t.me/xzkb_bot'}
                ]
            }
        }
    },
    themeConfig: {
        logo: '/logo.png'
    },
    srcDir: 'docs',
})
