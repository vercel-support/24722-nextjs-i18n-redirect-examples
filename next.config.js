module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: false
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: false
      },
    ]
  }
}