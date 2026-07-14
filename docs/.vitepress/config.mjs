import { defineConfig } from 'vitepress'

// Общие соц-ссылки
const socialLinks = [
  { icon: 'github', link: 'https://github.com/bumbumshakataka1/hosting-docs' }
]

export default defineConfig({
  title: 'Amnezia Hosting Docs',
  description: 'VPS-серверы для собственного VPN без сложной настройки. Руководства по подключению, настройке VPN и управлению сервером.',
  base: '/hosting-docs/',
  cleanUrls: false,
  appearance: 'force-dark', // только тёмная тема, переключатель скрыт
  lastUpdated: true,
  metaChunk: true,

  head: [
    ['link', { rel: 'icon', href: '/hosting-docs/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#00e63d' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Amnezia Hosting Docs' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    socialLinks,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: {
                noResultsText: 'Ничего не найдено',
                resetButtonTitle: 'Сбросить',
                footer: { selectText: 'выбрать', navigateText: 'навигация', closeText: 'закрыть' }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Начало работы', link: '/commands' },
          { text: 'VPN и защита', link: '/vpn-setup' },
          { text: 'Помощь', link: '/faq' }
        ],
        sidebar: [
          {
            text: 'Начало работы',
            items: [
              { text: '🚀 Быстрый старт', link: '/commands' },
              { text: '🖥️ Управление сервером', link: '/server-management' }
            ]
          },
          {
            text: 'VPN и защита',
            items: [
              { text: '🛡️ Настройка VPN', link: '/vpn-setup' },
              { text: '🔌 Протоколы', link: '/protocols' },
              { text: '📊 Панель 3X-UI', link: '/3x-ui' },
              { text: '⚡ Hysteria 2', link: '/hysteria2' }
            ]
          },
          {
            text: 'Помощь',
            items: [{ text: '❓ Решение проблем (FAQ)', link: '/faq' }]
          }
        ],
        outline: { level: [2, 3], label: 'На этой странице' },
        docFooter: { prev: 'Назад', next: 'Вперёд' },
        lastUpdatedText: 'Обновлено',
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Оформление'
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/commands' },
          { text: 'VPN & Security', link: '/en/vpn-setup' },
          { text: 'Help', link: '/en/faq' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: '🚀 Quick Start', link: '/en/commands' },
              { text: '🖥️ Server Management', link: '/en/server-management' }
            ]
          },
          {
            text: 'VPN & Security',
            items: [
              { text: '🛡️ VPN Setup', link: '/en/vpn-setup' },
              { text: '🔌 Protocols', link: '/en/protocols' },
              { text: '📊 3X-UI Panel', link: '/en/3x-ui' },
              { text: '⚡ Hysteria 2', link: '/en/hysteria2' }
            ]
          },
          {
            text: 'Help',
            items: [{ text: '❓ Troubleshooting (FAQ)', link: '/en/faq' }]
          }
        ],
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdatedText: 'Updated'
      }
    }
  }
})
