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
	name: 'KuroShin',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'
	
	// Weather
	weatherKey: 'b56c89f2664c14a26997cdf839e89203', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '14.724140',
	defaultLongitude: '-17.275190',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

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
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Manga Reader',
			icon: 'paw-print',
			link: 'https://mangareader.to/home',
		},
		{
			id: '5',
			name: 'League of Graphs',
			icon: 'gamepad-2',
			link: 'https://www.leagueofgraphs.com/fr/',
			
		},
		{
			id: '6',
			name: 'Ygg Torrent',
			icon: 'download-cloud',
			link: 'https://www.yggtorrent.qa/',
			
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com/?locale=fr_FR',
			
		},
		{
			id: '2',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com/',
			
		},
		{
			id: '3',
			name: 'Linkedin',
			icon: 'linkedin',
			link: 'https://fr.linkedin.com/',
			
		},
		{
			id: '4',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
			
		},
		{
			id: '5',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
			
			
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'book-heart',
			id: '1',
			links: [
				{
					name: 'Twitter',
					link: 'https://twitter.com/home',
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Twitch',
					link: 'https://www.twitch.tv/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
