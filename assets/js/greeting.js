// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const languageButton = document.getElementById('languageDropbtn');
const languageEnglishButton = document.getElementById('languageEnglish');
const languageIndonesianButton = document.getElementById('languageIndonesian');
const languageFrenchButton = document.getElementById('languageFrench');

const gree1_english = `${CONFIG.greetingNight},\xa0`;
const gree2_english = `${CONFIG.greetingMorning},\xa0`;
const gree3_english = `${CONFIG.greetingAfternoon},\xa0`;
const gree4_english = `${CONFIG.greetingEvening},\xa0`;

const gree1_indonesian = `${CONFIG.greetingNightIndonesian},\xa0`;
const gree2_indonesian = `${CONFIG.greetingMorningIndonesian},\xa0`;
const gree3_indonesian = `${CONFIG.greetingAfternoonIndonesian},\xa0`;
const gree4_indonesian = `${CONFIG.greetingEveningIndonesian},\xa0`;

const gree1_french = `${CONFIG.greetingNightFrench},\xa0`;
const gree2_french = `${CONFIG.greetingMorningFrench},\xa0`;
const gree3_french = `${CONFIG.greetingAfternoonFrench},\xa0`;
const gree4_french = `${CONFIG.greetingEveningFrench},\xa0`;

const showLanguageDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

const changeToEnglish = () => {
	if (hour >= 23 || hour < 5) {
		document.getElementById('greetings').innerText = gree1_english + name;
	}
	else if (hour >= 6 && hour < 12) {
		document.getElementById('greetings').innerText = gree2_english + name;
	}
	else if (hour >= 12 && hour < 17) {
		document.getElementById('greetings').innerText = gree3_english + name;
	}
	else {
		document.getElementById('greetings').innerText = gree4_english + name;
	}
}

const changeToIndonesian = () => {
    if (hour >= 23 || hour < 5) {
		document.getElementById('greetings').innerText = gree1_indonesian + name;
	}
	else if (hour >= 6 && hour < 12) {
		document.getElementById('greetings').innerText = gree2_indonesian + name;
	}
	else if (hour >= 12 && hour < 17) {
		document.getElementById('greetings').innerText = gree3_indonesian + name;
	}
	else {
		document.getElementById('greetings').innerText = gree4_indonesian + name;
	}
}

const changeToFrench = () => {
    if (hour >= 23 || hour < 5) {
		document.getElementById('greetings').innerText = gree1_french + name;
	}
	else if (hour >= 6 && hour < 12) {
		document.getElementById('greetings').innerText = gree2_french + name;
	}
	else if (hour >= 12 && hour < 17) {
		document.getElementById('greetings').innerText = gree3_french + name;
	}
	else {
		document.getElementById('greetings').innerText = gree4_french + name;
	}
}

languageButton.addEventListener('click', () => {
    showLanguageDropdown();
})

languageEnglishButton.addEventListener('click', () => {
    changeToEnglish();
})

languageIndonesianButton.addEventListener('click', () => {
    changeToIndonesian();
})

languageFrenchButton.addEventListener('click', () => {
    changeToFrench();
})

if (hour >= 23 || hour < 5) {
	document.getElementById('greetings').innerText = gree1_english + name;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greetings').innerText = gree2_english + name;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greetings').innerText = gree3_english + name;
} else {
	document.getElementById('greetings').innerText = gree4_english + name;
}
