module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: false,
      },
    ]
  },
}