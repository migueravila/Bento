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

  // General
  name: 'Marek',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '5b20d4e2f4018a199ae6ceb3c8d5a634',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi
  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '50.075539',
  defaultLongitude: '14.437800',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Notion',
      icon: 'trello',
      link: 'https://notion.so/',
    },
    {
      id: '4',
      name: 'Google Drive',
      icon: 'upload-cloud',
      link: 'https://drive.google.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bot',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'piggy-bank',
      id: '1',
      links: [
        {
          name: 'IBKR',
          link: 'https://www.interactivebrokers.co.uk/en/home.php',
        },
        {
          name: 'Trading View',
          link: 'https://www.tradingview.com/',
        },
        {
          name: 'Gurufocus',
          link: 'https://www.gurufocus.com/',
        },
        {
          name: 'Valuat.io',
          link: 'https://valuat.io',
        },
      ],
    },
    {
      icon: 'terminal-square',
      id: '2',
      links: [
        {
          name: 'STRV ACDM',
          link: 'https://github.com/strvcom/frontend-academy-2022/wiki',
        },
        {
          name: 'Udemy',
          link: 'https://www.udemy.com',
        },
        {
          name: 'Frontend Resources',
          link: 'https://codingheroes.io/resources/',
        },
        {
          name: 'Figma',
          link: 'https://www.figma.com',
        },
      ],
    },
  ],

  // Second Links Container
  //   secondListsContainer: [
  //     {
  //       icon: 'binary',
  //       id: '1',
  //       links: [
  //         {
  //           name: 'Spotify',
  //           link: 'https://www.spotify.com',
  //         },
  //         {
  //           name: 'Reddit',
  //           link: 'https://www.reddit.com',
  //         },
  //         {
  //           name: 'Hashnode',
  //           link: 'https://www.hashnode.com',
  //         },
  //         {
  //           name: 'Pocket',
  //           link: 'https://www.pocket.com',
  //         },
  //       ],
  //     },
  //     {
  //       icon: 'github',
  //       id: '2',
  //       links: [
  //         {
  //           name: 'Front',
  //           link: 'https://www.reddit.com/r/Frontend/',
  //         },
  //         {
  //           name: 'Rust',
  //           link: 'https://www.reddit.com/r/rust/',
  //         },
  //         {
  //           name: 'Go',
  //           link: 'https://www.reddit.com/r/golang/',
  //         },
  //         {
  //           name: 'Repos',
  //           link: 'https://github.com/migueravila',
  //         },
  //       ],
  //     },
  //   ],
}
