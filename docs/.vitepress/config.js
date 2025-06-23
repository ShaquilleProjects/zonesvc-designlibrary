export default {
  title: 'Zone UI Design System',
  description: 'Modern, minimalistic, and playful design system for stock exchange interfaces',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/index.html' },
      { text: 'Components', link: '/components.html' },
      { text: 'Getting Started', link: '/getting-started.html' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/button.html' },
            { text: 'Switch', link: '/switch.html' },
            { text: 'Progress', link: '/progress.html' },
            { text: 'Spinner', link: '/spinner.html' },
            { text: 'Stepper', link: '/stepper.html' }
          ]
        }
      ]
    }
  },
  vue: {
    reactivityTransform: true
  }
}
