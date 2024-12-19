import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical TnCs",
  description: "SLA",
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          },
        },
    },
    
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/introduction/overview' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Glossaries', link: '/introduction/glossaries' },
        ]        
      },

      {
        text: 'Back Ups & Storage',
        items: [
          { text: 'Data Protection', link: '/back-ups-&-storage/data-protection' },
          { text: 'Back Ups', link: '/back-ups-&-storage/back-ups' },
          { text: 'Schedules', link: '/back-ups-&-storage/schedules' },
        ],
      },

      {
        text: 'Website Packages',
        items: [
          { text: 'Packages', link: '/website-packages/packages' },
          { text: 'Starter Websites', link: '/website-packages/starter-websites' },
        ],
      },

      {
        text: 'Add Ons',
        items: [
          { text: 'SKU Count', link: '/add-ons/sku-count' },
          { text: 'Back Ups', link: '/add-ons/back-ups' },
          { text: 'Schedules', link: '/add-ons/schedules' },
        ],
      }
      
      

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})