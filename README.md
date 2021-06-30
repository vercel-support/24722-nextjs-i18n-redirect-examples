For Next.js projects, it is better to handle all your redirects and rewrites using next.config.js instead of vercel.json as the settings inside next.config.js is applied in both frontend and serverless routes.

In my example, en is the default and visitors to /en/* is redirected to /*.

You can access the following routes:
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/fr
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/de
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/fr/hello/world
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/de/hello/world
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/en/hello/world
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/hello/world
https://24722-nextjs-i18n-redirect-examples-byck.vercel-support.app/[en or fr or de]/[whatever*]
