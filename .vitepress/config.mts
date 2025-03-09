import { defineConfig, DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiki - Berlime",
  description: "SLA",
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    outline: {
      level: [1, 3]
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
        collapsed: true,
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Company', link: '/introduction/company' },
          { text: 'Glossaries', link: '/introduction/glossaries' },
          
        ]        
      },

      {
        text: 'Website Packages',
        collapsed: true,
        items: [
          { text: 'Types of Websites', link: '/website-packages/types-of-websites' },
          { text: 'Starter Websites', link: '/website-packages/starter-websites' },
          { text: 'Pro Websites', link: '/website-packages/pro-websites' },
          { text: 'HFD Websites', link: '/website-packages/hfd-websites' },
          { text: 'Onine Shop Websites', link: '/website-packages/online-shop-websites' },
          { text: 'Custom Websites', link: '/website-packages/custom-websites.md' },
          { text: 'Maintenance', link: '/website-packages/maintenance.md' },
          // { text: 'Cosmic', link: '/website-packages/cosmic.md' },
          // { text: 'Stellar', link: '/website-packages/stellar.md' },
          // { text: 'Voyage', link: '/website-packages/voyage.md' },
          // { text: 'Odyssey', link: '/website-packages/odyssey.md' },
          // { text: 'Oyperdrive', link: '/website-packages/hyperdrive.md' },

        ],
      },
      {
        text: 'Upstream Providers',
        collapsed: true,
        items: [
          { text: 'Server Providers', link: '/upstream-providers/server-providers' },
          { text: 'Domain Providers', link: '/upstream-providers/domain-providers' },
          { text: 'Email Providers', link: '/upstream-providers/email-providers' },
          { text: 'Storage Providers', link: '/upstream-providers/storage-providers' },
        ],
      },
      {
        text: 'Add Ons',
        collapsed: true,
        items: [
          { text: 'SKU Count', link: '/add-ons/sku-count' },
          { text: 'Softwares', link: '/add-ons/softwares' },
          { text: 'Marketing', link: '/add-ons/marketing' },
        ],
      },
      {
        text: 'Other Services',
        collapsed: true,
        items: [
          { text: 'Intranets', link: '/other-services/sku-count' },
          { text: 'Automations', link: '/other-services/softwares' },
          { text: 'Interactive', link: '/other-services/marketing' },
          { text: 'E-mail Marketing', link: '/other-services/marketing' },
          { text: 'WhatsApp Marketing', link: '/other-services/marketing' },
          { text: 'Search Engine Marketing', link: '/other-services/marketing' },
          { text: 'SOHO Networking', link: '/other-services/marketing' },
          { text: 'File Servers', link: '/other-services/marketing' },
          { text: 'Custom Devices', link: '/other-services/custom-devices' },
          { text: 'Software Procurement', link: '/other-services/marketing' },
          { text: 'Computer Hardwares', link: '/other-services/marketing' },
        ],
      },
    

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Berlime/vite' }
    ]
  }
})