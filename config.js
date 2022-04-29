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
  	name: 'Bilal',
 	imageBackground: false,
  	openInNewTab: false,

  	// Greetings
  	greetingMorning: 'Good morning,',
  	greetingAfternoon: 'Good afternoon,',
  	greetingEvening: 'Good evening,',
  	greetingNight: 'Good evening,',

  	// Weather
  	weatherKey: 'f7b9795af021d5b7e584a0f4fae9ce59',
  	weatherIcons: 'OneDark',
  	weatherUnit: 'C',
  	weatherLatitude: '25.204849',
  	weatherLongitude: '55.270782',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
      id: '1',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/home',
    },
    {
      id: '2',
      name: 'Anime List',
      icon: 'list',
      link: 'https://anilist.co/user/BilalAG/animelist',
    },
    {
      id: '3',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '4',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '5',
      name: 'Netflix',
      icon: 'film',
      link: 'https://www.netflix.com/browse',
    },
    {
      id: '6',
      name: 'MangaReader',
      icon: 'book-open',
      link: 'https://proxy.cubari.moe/#/saved',
    },
  ],
	
	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	 //Icons
  firstListIcon: 'home',
  secondListIcon: 'hash',

  // Links
  lists: {
    firstList: [
      {
        name: 'Official Mail',
        link: 'https://mail.google.com/mail/u/1/#inbox',
      },
      {
        name: 'Reddit',
        link: 'https://reddit.com',
      },
      {
        name: 'Router Settings',
        link: 'http://192.168.0.1/info/Login.html',
      },
      {
        name: 'World Table Tennis',
        link: 'https://worldtabletennis.com/home',
      },
      {
        name: '1337x',
        link: 'https://1337xto.to/',
      },
    ],
    secondList: [
      {
        name: 'Nyaa',
        link: 'https://nyaa.si/',
      },
      {
        name: "Sea Smoke's Index",
        link: 'https://docs.google.com/spreadsheets/d/1emW2Zsb0gEtEHiub_YHpazvBd4lL4saxCwyPhbtxXYM/htmlview',
      },
      {
        name: 'GEMS Portal',
        link: 'https://gems.ae',
      },
      {
        name: 'Fansubber\'s Index',
        link: 'https://index.fansubcar.tel/',
      },
      {
        name: 'Anime Filler List',
        link: 'https://www.animefillerlist.com/',
      },
    ],
  },
};

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    document.body.classList.add('darktheme');
  }
  else {
    document.body.className = document.body.className.replace("darktheme","");
  }
})

if(window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.body.className = document.body.className.replace("darktheme","");
}
