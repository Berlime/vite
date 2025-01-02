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
        // collapsed: true,
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Glossaries', link: '/introduction/glossaries' },
        ]        
      },

      {
        text: 'Back Ups & Storage',
        //  
        items: [
          { text: 'Data Protection', link: '/back-ups-&-storage/data-protection' },
          { text: 'Back Ups', link: '/back-ups-&-storage/back-ups' },
          { text: 'Schedules', link: '/back-ups-&-storage/schedules' },
        ],
      },

      {
        text: 'Website Packages',
        // collapsed: true,
        items: [
          { text: 'Introduction', link: '/website-packages/introduction' },
          { text: 'Starter Websites', link: '/website-packages/starter-websites' },
        ],
      },

      {
        text: 'Maintenance',
        // collapsed: true,
        items: [
          { text: 'Introduction', link: '/maintenance/introduction' },
          { text: 'Server Maintenance', link: '/maintenance/server-maintenance' },
        ],
      },

      {
        text: 'Equipments',
        items: [
          { text: 'Introduction', link: '/equipments/overview' },
        ],
      },

      {
        text: 'Add Ons',
        // collapsed: true,
        items: [
          { text: 'SKU Count', link: '/add-ons/sku-count' },
        ],
      },
      
      

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Berlime/vite' }
    ]
  }
})