// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  name: 'John',

  layout: 'bento',

  imageBackground: false,
  weatherIcons: 'dark',
  openInNewTab: true,

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  cards: [
    {
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/',
    },
    {
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      name: 'Odysee',
      icon: 'youtube',
      link: 'https://odysee.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  firstListIcon: 'music',
  secondListIcon: 'coffee',

  lists: {
    firstList: [
      {
        name: 'Github',
        link: 'https://github.com/',
      },
      {
        name: 'Mail',
        link: 'https://mail.protonmail.com/',
      },
      {
        name: 'Calendar',
        link: 'https://calendar.google.com/calendar/r',
      },
      {
        name: 'Reddit',
        link: 'https://reddit.com',
      },
    ],
    secondList: [
      {
        name: 'Github',
        link: 'https://github.com/',
      },
      {
        name: 'Mail',
        link: 'https://mail.protonmail.com/',
      },
      {
        name: 'Calendar',
        link: 'https://calendar.google.com/calendar/r',
      },
      {
        name: 'Reddit',
        link: 'https://reddit.com',
      },
    ],
  },
};

export default CONFIG;
