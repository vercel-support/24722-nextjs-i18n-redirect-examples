module.exports = {
  trailingSlash: true,
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: '/en/',
        destination: '/',
        permanent: false,
        locale: false
      },
      // {
      //   source: '/en/:path*',
      //   destination: '/:path*',
      //   permanent: false
      // },
    ]
  }
}