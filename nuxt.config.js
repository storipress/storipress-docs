import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55',
  },
  // i18n: {
  //   locales: () => [
  //     {
  //       code: 'tw',
  //       iso: 'zh-CN',
  //       file: 'zh-CN.js',
  //       name: '中文'
  //     },
  //     {
  //       code: 'en',
  //       iso: 'en-US',
  //       file: 'en-US.js',
  //       name: 'English'
  //     }
  //   ],
  //   defaultLocale: 'en'
  // },
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://assets.stori.press/storipress/css/fonts.css',
      },
    ],
  },
  plugins: [{ src: '~~/plugins/event-bus' }],
})
