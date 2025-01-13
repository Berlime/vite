import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs.Berlime",
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
        text: 'Introduction 🌐',
        // collapsed: true,
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Glossaries', link: '/introduction/glossaries' },
        ]        
      },

      {
        text: 'Website Packages 📦',
        // collapsed: true,
        items: [
          { text: 'Types of Websites', link: '/website-packages/types-of-websites' },
          { text: 'Starter Websites', link: '/website-packages/starter-websites' },
          { text: 'Pro Websites', link: '/website-packages/pro-websites' },
          { text: 'HFD Websites', link: '/website-packages/hfd-websites' },
          // { text: 'Launch', link: '/website-packages/launch.md' },
          // { text: 'Astral', link: '/website-packages/astral.md' },
          // { text: 'Cosmic', link: '/website-packages/cosmic.md' },
          // { text: 'Stellar', link: '/website-packages/stellar.md' },
          // { text: 'Voyage', link: '/website-packages/voyage.md' },
          // { text: 'Odyssey', link: '/website-packages/odyssey.md' },
          // { text: 'Oyperdrive', link: '/website-packages/hyperdrive.md' },

        ],
      },

      {
        text: 'Maintenance 🔧',
        // collapsed: true,
        items: [
          { text: 'Care Plan', link: '/maintenance/care-plan' },
          { text: 'Server Maintenance', link: '/maintenance/server-maintenance' },
          { text: 'Data Protection', link: '/maintenance/data-protection' },
          { text: 'Back Ups', link: '/maintenance/back-ups' },
          // { text: 'Support', link: '/maintenance/support' },
        ],
      },

      {
        text: 'Equipment 💻',
        items: [
          { text: 'Overview', link: '/equipment/overview' },
        ],
      },

      {
        text: 'Add Ons ➕',
        // collapsed: true,
        items: [
          { text: 'SKU Count', link: '/add-ons/sku-count' },
          { text: 'Softwares', link: '/add-ons/softwares' },
        ],
      },
      
      

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Berlime/vite' }
    ]
  }
})