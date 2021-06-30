For Next.js projects, it is better to handle all your redirects and rewrites using next.config.js instead of vercel.json as the settings inside next.config.js is applied in both frontend and serverless routes.

In my example, `en` is the default and visitors to `/en/*` is redirected to `/*`.

You can access the following routes:

1. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/
2. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/fr
3. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/de
4. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/fr/hello/world
5. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/de/hello/world
6. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/en/hello/world
7. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/hello/world
8. https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/[en or fr or de]/[whatever*]
