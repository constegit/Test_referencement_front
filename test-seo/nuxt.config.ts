import { baseURL } from "nuxt/dist/core/runtime/nitro/paths"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: ' @import "@/assets/scss/functions.scss";',
                },
            },
        },
    },
    css: [
        '~/assets/scss/style.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'user-scalable=yes, initial-scale=1.0, maximum-scale=1, width=device-width',
            title: 'Agence digital',
            meta: [
                { name: 'description', content: 'Meilleur agence digital de Madagascar' }
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
                    integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
                    crossorigin: "anonymous",
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
                    integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4',
                    crossorigin: 'anonymous',
                },
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-W6WPMEPZT1',
                }
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    runtimeConfig: {
        apiKey: '',
        public: {
            baseURL: process.env.BASE_URL || 'http://51.178.17.54:1337',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000/',
        }
    },
    plugins: [
        '~/plugins/google-analytics.js'
    ],
    modules: [
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
    ],
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/'],
            ignore: []
        },
    },
    routeRules: {
        // use the `index` shortcut for simple rules
        '/secret/**': { index: false },
        // add exceptions for individual routes
        '/secret/visible': { index: true },
        // use the `robots` rule if you need finer control
        '/custom-robots': { robots: 'index, follow' },
    }

})
