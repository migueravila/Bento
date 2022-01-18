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
  name: 'Shreyan',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '2c69e12c4c4733806658bed63e495c54',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '18.989401',
  weatherLongitude: '73.117516',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/shreyan-haldankar',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'mailto:shreyanhaldankar@gmail.com',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://coinmarketcap.com/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://todoist.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Odysee',
      icon: 'youtube',
      link: 'https://www.youtube.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Coding',
        link: 'https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j?si=b3b46c36f71641b3',
      },
      {
        name: 'Workout',
        link: 'https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh?si=ad47388c1883494e',
      },
      {
        name: 'Mix 1',
        link: 'https://open.spotify.com/playlist/37i9dQZF1E35q4H6Z4bph8?si=e00a2dcdd75a4405',
      },
      {
        name: 'Mix 2',
        link: 'https://open.spotify.com/playlist/37i9dQZF1E39JJ1NSJczhF?si=2960f5824e7e4b59',
      },
      
    ],
    secondList: [
      {
        name: 'HackerRank',
        link: 'https://www.hackerrank.com/',
      },
      {
        name: 'Freecodecamp',
        link: 'https://www.freecodecamp.org/',
      },
      {
        name: 'Codecademy',
        link: 'https://www.codecademy.com//',
      },
      {
        name: 'Project Euler',
        link: 'https://projecteuler.net/',
      },
    ],
  },
};
