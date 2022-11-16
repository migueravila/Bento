// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

let CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings English
	greetingMorning: 'Good Morning',
	greetingAfternoon: 'Good Afternoon',
	greetingEvening: 'Good Evening',
	greetingNight: 'Go to sleep!',

	// Greetings Indonesian
	greetingMorningIndonesian: 'Selamat Pagi',
	greetingAfternoonIndonesian: 'Selamat Siang',
	greetingEveningIndonesian: 'Selamat Sore',
	greetingNightIndonesian: 'Saatnya istirahat!',

	// Greetings French
	greetingMorningFrench: 'Bonjour',
	greetingAfternoonFrench: 'Bonne après-midi',
	greetingEveningFrench: 'Bonsoir',
	greetingNightFrench: 'Il est temps de dormir!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// Music (English)
	musicEnglish1: 'Relax',
	musicEnglish2: 'Classic',
	musicEnglish3: 'Electro',
	musicEnglish4: 'Rock',

	// Music (Indonesian)
	musicIndonesian1: 'Santai',
	musicIndonesian2: 'Klasik',
	musicIndonesian3: 'Elektro',
	musicIndonesian4: 'Rock',

	// Music (French)
	musicFrench1: 'Détends',
	musicFrench2: 'Classique',
	musicFrench3: 'Électro',
	musicFrench4: 'Rock',

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
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Relax',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Electro',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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

//COUNTDOWN TIMER
// class Timer {
// 	constructor(root) {
// 	  root.innerHTML = Timer.getHTML();
  
// 	  this.el = {
// 		minutes: root.querySelector(".timer__part--minutes"),
// 		seconds: root.querySelector(".timer__part--seconds"),
// 		control: root.querySelector(".timer__btn--control"),
// 		reset: root.querySelector(".timer__btn--reset")
// 	  };
  
// 	  this.interval = null;
// 	  this.remainingSeconds = 0;
  
// 	  this.el.control.addEventListener("click", () => {
// 		if (this.interval === null) {
// 		  this.start();
// 		} else {
// 		  this.stop();
// 		}
// 	  });
  
// 	  this.el.reset.addEventListener("click", () => {
// 		const inputMinutes = prompt("Enter number of minutes:");
  
// 		if (inputMinutes < 60) {
// 		  this.stop();
// 		  this.remainingSeconds = inputMinutes * 60;
// 		  this.updateInterfaceTime();
// 		}
// 	  });
// 	}
  
// 	updateInterfaceTime() {
// 	  const minutes = Math.floor(this.remainingSeconds / 60);
// 	  const seconds = this.remainingSeconds % 60;
  
// 	  this.el.minutes.textContent = minutes.toString().padStart(2, "0");
// 	  this.el.seconds.textContent = seconds.toString().padStart(2, "0");
// 	}
  
// 	updateInterfaceControls() {
// 	  if (this.interval === null) {
// 		this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
// 		this.el.control.classList.add("timer__btn--start");
// 		this.el.control.classList.remove("timer__btn--stop");
// 	  } else {
// 		this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
// 		this.el.control.classList.add("timer__btn--stop");
// 		this.el.control.classList.remove("timer__btn--start");
// 	  }
// 	}
  
// 	start() {
// 	  if (this.remainingSeconds === 0) return;
  
// 	  this.interval = setInterval(() => {
// 		this.remainingSeconds--;
// 		this.updateInterfaceTime();
  
// 		if (this.remainingSeconds === 0) {
// 		  this.stop();
// 		}
// 	  }, 1000);
  
// 	  this.updateInterfaceControls();
// 	}
  
// 	stop() {
// 	  clearInterval(this.interval);
  
// 	  this.interval = null;
  
// 	  this.updateInterfaceControls();
// 	}
  
// 	static getHTML() {
// 	  return `
// 			  <span class="timer__part timer__part--minutes">00</span>
// 			  <span class="timer__part">:</span>
// 			  <span class="timer__part timer__part--seconds">00</span>
// 			  <button type="button" class="timer__btn timer__btn--control timer__btn--start">
// 				  <span class="material-icons">play_arrow</span>
// 			  </button>
// 			  <button type="button" class="timer__btn timer__btn--reset">
// 				  <span class="material-icons">timer</span>
// 			  </button>
// 		  `;
// 	}
//   }
  
//   new Timer(
// 	  document.querySelector(".timer")
//   );