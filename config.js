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

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '2',
      name: 'Drive',
      icon: 'upload-cloud',
      link: 'https://drive.google.com/drive/my-drive',
    },
    {
      id: '3',
      name: 'Notion',
      icon: 'trello',
      link: 'https://notion.so/',
    },
    {
      id: '4',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
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

  //Icons
  firstListIcon: 'dollar-sign',
  secondListIcon: 'terminal',

  // Links
  lists: {
    firstList: [
      {
        name: 'IBKR',
        link: 'https://www.interactivebrokers.co.uk/en/home.php',
      },
      {
        name: 'Trading View',
        link: 'https://www.tradingview.com/',
      },
      {
        name: 'GuruFocus',
        link: 'https://www.gurufocus.com/new_index/',
      },
      {
        name: 'Finviz',
        link: 'https://finviz.com/',
      },
      {
        name: 'Seeking Alpha',
        link: 'https://seekingalpha.com/',
      },
    ],
    secondList: [
      {
        name: 'Front end resources',
        link: 'https://codingheroes.io/resources/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Stack Overflow',
        link: 'https://stackoverflow.com/',
      },
      {
        name: 'W3 Schools',
        link: 'https://www.w3schools.com/python/python_reference.asp',
      },
      {
        name: 'Django Cheat Sheet',
        link: 'https://dev.to/ericchapman/my-beloved-django-cheat-sheet-2056',
      },
    ],
  },
};
