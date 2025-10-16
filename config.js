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
  name: "Andre",
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "f04a3612bd3be38f1c3460104abd7a47", // Write here your API Key
  weatherIcons: "Nord", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "-7.781167",
  defaultLongitude: "110.37925",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "06:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/mail/u/0/",
    },
    {
      id: "2",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "3",
      name: "Gitlab",
      icon: "gitlab",
      link: "https://gitlab.com/",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com",
    },
    {
      id: "2",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "3",
      name: "Twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "4",
      name: "Bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "5",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "6",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Inspirational",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "Classic",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "Oldies",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "Rock",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "DevDocs",
          link: "https://devdocs.io/",
        },
        {
          name: "NotebookLM",
          link: "https://notebooklm.google.com/",
        },
        {
          name: "Claude",
          link: "https://claude.ai/",
        },
        {
          name: "ChatGPT",
          link: "https://chatgpt.com/",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Youtube",
          link: "https://www.youtube.com",
        },
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Dev.to",
          link: "https://dev.to",
        },
        {
          name: "Stack Overflow",
          link: "https://stackoverflow.com",
        },
        {
          name: "Roadmap.sh",
          link: "https://roadmap.sh",
        },
        {
          name: "Github Trends",
          link: "https://github.com/trending",
        },
      ],
    },
  ],
};
