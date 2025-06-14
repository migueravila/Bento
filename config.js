const CONFIG = {

	// General
	name: 'kyoto',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'eaac435557c6bf4ed867ec627ecd73ef', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.930753',
	defaultLongitude: '36.032010',

	// Autochange
	autoChangeTheme: true,

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
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'VK',
			icon: 'message-square',
			link: 'https://vk.com/',
		},
		{
			id: '3',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/?pli=1#inbox/',
		},
		{
			id: '4',
			name: 'Sheets',
			icon: 'table',
			link: 'https://docs.google.com/spreadsheets/u/0/',
		},
		{
			id: '5',
			name: 'Weather',
			icon: 'sun',
			link: 'https://yandex.ru/pogoda/ru/orel/',
		},
		{
			id: '6',
			name: 'Faceit',
			icon: 'smile',
			link: 'https://www.faceit.com/ru/home/',
		},
	],
};
