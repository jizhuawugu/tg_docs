import {defineConfig} from 'vitepress'


export default defineConfig({
    title: "FreeLink",
    description: "抱歉，目前您只能给双向联系人发送消息 双向机器人解决方案",
    lastUpdated: true,
    sitemap: {
        hostname: 'https://blog.freelinktg.top',
        lastmodDateOnly: false
    },
    head: [
        ['meta', {name: 'author', content: 'jizhuawugu'}],
        ['meta', {name: 'keywords', content: '双向机器人'}],
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
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
                            {
                                text: '❗️ 我无法发送消息', link: '/zh/brief/unable_send_message'
                            },
                            {
                                text: '🤔 怎么解决', link: '/zh/brief/solve'
                            },
                            {
                                text: '➕ 创建机器人', link: '/zh/brief/create_bot'
                            },
                        ],
                    },
                    {
                        text: '功能介绍',
                        items: [
                            {
                                text: '用户管理', link: '/zh/user/user_management',
                                items: [
                                    {text: '👤 封禁/解禁', link: '/zh/user/ban_or_release'},
                                    {text: '👤 编辑备注', link: '/zh/user/edit_notes'},
                                    {text: '👤 编辑说明', link: '/zh/user/edit_describe'},
                                    {text: '👤 显示备注', link: '/zh/user/display_notes'},
                                    {text: '👤 删除聊天记录', link: '/zh/user/delete_chat_history'}
                                ]
                            },
                            {
                                text: 'TG会员管理',
                                items: [
                                    {
                                        text: '👑 设置会员价格', link: '/zh/telegram_premium/set_telegram_premium'
                                    }
                                ]
                            },
                            {
                                text: '键盘管理', link: '/zh/keyboard/keyboard_management', items: [
                                    {
                                        text: '⌨️ 键盘', link: '/zh/keyboard/keyboard'
                                    },
                                    {
                                        text: '⌨️ 响应内容', link: '/zh/keyboard/keyboard_content'
                                    },
                                    {
                                        text: '⌨️ 响应按钮', link: '/zh/keyboard/keyboard_button'
                                    }
                                ]
                            },
                            {
                                text: '命令管理', link: '/zh/command/command_management', items: [
                                    {
                                        text: '💾 命令', link: '/zh/command/command'
                                    },
                                    {
                                        text: '💾 响应内容', link: '/zh/command/command_content'
                                    },
                                    {
                                        text: '💾 响应按钮', link: '/zh/command/command_button'
                                    }
                                ]
                            },
                            {
                                text: '欢迎词', link: '/zh/bot_welcome/bot_welcome', items: [
                                    {
                                        text: "👏 启用/禁用", link: '/zh/bot_welcome/enable_or_disable'
                                    },
                                    {
                                        text: "👏 编辑", link: '/zh/bot_welcome/edit'
                                    },
                                    {
                                        text: "👏 新增按钮", link: '/zh/bot_welcome/add_button'
                                    },
                                    {
                                        text: "👏 预览", link: '/zh/bot_welcome/preview'
                                    }
                                ]
                            },
                            {
                                text: '广播', link: '/zh/bot_broadcast/bot_broadcast', items: [
                                    {
                                        text: "📡 新增广播"
                                    },
                                    {
                                        text: "📡 发送广播"
                                    }
                                ]
                            },
                            {
                                text: '自动回复', link: '/zh/bot_auto_reply/bot_auto_reply', items: [
                                    {
                                        text: '💬 新增关键词'
                                    },
                                ]
                            },
                            {
                                text: '付费聊天', items: [
                                    {text: '💰 启用/禁用'},
                                    {text: '💰 订单'},
                                    {text: '💰 编辑收款地址'},
                                    {text: '💰 编辑付费金额'},
                                    {text: '💰 口令支付/启用/禁用'},
                                    {text: '💰 口令: x字符'},
                                ]
                            },

                        ],
                    }
                ]
            }
        },
        // en: {
        //     label: 'English',
        //     lang: 'en',
        //     link: '/en/',
        //     title: 'FreeLink English Documentation',
        //     description: 'FreeLink English Documentation',
        //     themeConfig: {
        //         nav: [
        //             {text: 'Home', link: '/en/'},
        //             {text: 'Examples', link: '/en/markdown-examples'}
        //         ],
        //         sidebar: [
        //             {
        //                 text: 'Guide',
        //                 items: [
        //                     {text: 'Introduction', link: '/introduction'},
        //                     {text: 'Getting Started', link: '/getting-started'}
        //                 ]
        //             }
        //         ],
        //
        //     }
        // }
    },
    themeConfig: {
        logo: '/logo.png',
        search: {
            provider: 'local',
        },
        socialLinks: [
            {icon: 'telegram', link: 'https://t.me/xzkb_bot'}
        ]
    },
    srcDir: 'docs',
})
