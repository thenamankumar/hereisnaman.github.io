module.exports = {
  siteTitle: 'Naman Kumar (hereisnaman) | Indie Maker, Software Engineer',
  siteDescription:
    'I’m Naman Kumar. I discover, ideate and build cool products. I am an award winning open soruce developer and a javascript fullstack engineer. I work on react, graphql, nodejs and vuejs. I have worked with startups including Hacker Earth, Coding Blocks and Tripshire.',
  siteKeywords:
    'Naman Kumar, Naman, hereisnaman, fullstack developer, software engineer, javascript, react, vue, ember, express, nodejs, graphql, pwa',
  siteUrl: 'https://naman.sh',
  siteLanguage: 'en_US',
  siteImage: 'https://naman.sh/og.png',
  name: 'Naman Kumar',
  location: 'New Delhi, India',
  email: 'naman@outlook.in',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/hereisnaman',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hereisnaman',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hereisnaman',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/hereisnaman',
    },
  ],

  navLinks: [
    {
      name: 'Github',
      url: 'https://github.com/hereisnaman',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hereisnaman',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hereisnaman',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/hereisnaman',
    },
  ],

  twitterHandle: '@hereisnaman',
  googleAnalyticsID: 'UA-130747716-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
