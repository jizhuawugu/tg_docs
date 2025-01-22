import {defineConfig} from 'vitepress'


export default defineConfig({
    title: "FreeLink",
    description: "Telegram 双向机器人 私聊机器人",
    lastUpdated: true,
    sitemap: {
        hostname: 'https://blog.freelinktg.top',
        lastmodDateOnly: false
    },
    head: [
        ['meta', {name: 'author', content: 'freelink'}],
        ['meta', {name: 'keywords', content: '双向机器人'}],
        ['meta', {property: 'og:title', content: 'FreeLink 双向机器人'}],
        ['meta', {property: 'og:description', content: '一个适合所有人的 Telegram 双向机器人'}],
        ['meta', {property: 'og:image', content: '/logo.png'}],
        ['meta', {property: 'og:url', content: 'http://blog.freelinktg.top/'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {name: 'google-site-verification', content: 'vMVG3iHWfafSxvz-oTbnSziwkZ1w4CJVRhNetmCZtgI'}],
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            title: 'FreeLink',
            description: 'Telegram 双向机器人 私聊机器人',
            themeConfig: {
                nav: [
                    {text: '文档', link: '/zh/brief/bot_introduce'},
                ],
                sidebar: {
                    '/zh': [
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
                            text: '双向机器人',
                            items: [
                                {
                                    text: '🗣️ 怎么回复用户', link: '/zh/private_chat_bot/reply'
                                },
                                // {
                                //     text: '🗣️ 测试', link: '/zh/api-examples'
                                // },
                            ]
                        },
                        {
                            text: 'FreeLink 功能介绍',
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
                                    text: 'TG会员管理', link: '/zh/telegram_premium/telegram_premium',
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
                                            text: '⌨️ 按钮管理', link: '/zh/keyboard/keyboard_button'
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
                                            text: '💾 按钮管理', link: '/zh/command/command_button'
                                        }
                                    ]
                                },
                                {
                                    text: '欢迎词', link: '/zh/bot_welcome/bot_welcome', items: [
                                        {
                                            text: "👏 启用/禁用", link: '/zh/bot_welcome/enable_or_disable'
                                        },
                                        {
                                            text: "👏 编辑欢迎词", link: '/zh/bot_welcome/edit'
                                        },
                                        {
                                            text: "👏 新增按钮", link: '/zh/bot_welcome/add_button'
                                        }
                                    ]
                                },
                                {
                                    text: '广播', link: '/zh/bot_broadcast/bot_broadcast', items: [
                                        {
                                            text: "📡 发送广播", link: '/zh/bot_broadcast/send_bot_broadcast'
                                        }
                                    ]
                                },
                                {
                                    text: '自动回复', link: '/zh/bot_auto_reply/bot_auto_reply', items: [
                                        {
                                            text: '💬 匹配方式', link: '/zh/bot_auto_reply/matching_method'
                                        },
                                        {
                                            text: '💬 使用范围', link: '/zh/bot_auto_reply/use_range'
                                        },
                                        {
                                            text: '💬 回复词组', link: '/zh/bot_auto_reply/reply_group'
                                        },
                                    ]
                                },
                                {
                                    text: '付费聊天(专业版专享)', link: '/zh/paid/paid_chat', items: [
                                        {text: '💰 订单', link: '/zh/paid/order'},
                                        {text: '💰 编辑收款地址', link: '/zh/paid/edit_payment_address'},
                                        {text: '💰 编辑付费金额', link: '/zh/paid/edit_amount'},
                                        {text: '💰 口令: x字符', link: '/zh/paid/chat_command_str_num'},
                                    ]
                                },
                                {
                                    text: '设置', link: '/zh/settings/settings', items: [
                                        {text: '⚙️ 聊天模式', link: '/zh/settings/chat_model'},
                                    ]
                                },
                            ],
                        }
                    ],
                    '/zh/card/': [
                        {
                            text: "❗️ 特殊说明", link: '/zh/card/index'
                        },
                        {
                            text: "❓ 什么是U卡", link: '/zh/card/what_is_usdt'
                        },
                        {
                            text: "U卡",
                            items: [
                                {text: '💳  PokePay', link: '/zh/card/usdt_card/pokepay'},
                            ]
                        }
                    ],
                }
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
        ],
        footer: {
            message: 'Unlimited communication, efficient interaction anytime, anywhere!',
            copyright: `Copyright © ${new Date().getFullYear()}.FreeLink.All rights reserved.`
        },
        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // }
    },
    srcDir: 'docs',
})
