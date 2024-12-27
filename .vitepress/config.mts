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

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © <a href="https://github.com/yyx990803">Evan You</a> | <a href="https://berlime.com/">Berlime Solutions Pte. Ltd.</a>'
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
          { text: 'Introduction', link: '/website-packages/introduction' },
          { text: 'Starter Websites', link: '/website-packages/starter-websites' },
        ],
      },

      {
        text: 'Add Ons',
        items: [
          { text: 'SKU Count', link: '/add-ons/sku-count' },
        ],
      }
      
      

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Berlime/vite' }
    ]
  }
})