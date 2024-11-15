import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical Documents",
  description: "SLA",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
        text: 'Service Packages',
        items: [
          { text: 'Starter Websites', link: '/service-packages/starter-websites' },
          { text: 'Back Ups', link: '/service-packages/back-ups' },
          { text: 'Schedules', link: '/service-packages/schedules' },
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