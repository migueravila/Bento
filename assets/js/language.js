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

const musicList1_english = CONFIG.musicEnglish1;
const musicList2_english = CONFIG.musicEnglish2;
const musicList3_english = CONFIG.musicEnglish3;
const musicList4_english = CONFIG.musicEnglish4;

const musicList1_indonesian = CONFIG.musicIndonesian1;
const musicList2_indonesian = CONFIG.musicIndonesian2;
const musicList3_indonesian = CONFIG.musicIndonesian3;
const musicList4_indonesian = CONFIG.musicIndonesian4;

const musicList1_french = CONFIG.musicFrench1;
const musicList2_french = CONFIG.musicFrench2;
const musicList3_french = CONFIG.musicFrench3;
const musicList4_french = CONFIG.musicFrench4;

const showLanguageDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

const changeToEnglish = () => {
	document.getElementById('musicList1').innerText = musicList1_english;
	document.getElementById('musicList2').innerText = musicList2_english;
	document.getElementById('musicList3').innerText = musicList3_english;
	document.getElementById('musicList4').innerText = musicList4_english;

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
	document.getElementById('musicList1').innerText = musicList1_indonesian;
	document.getElementById('musicList2').innerText = musicList2_indonesian;
	document.getElementById('musicList3').innerText = musicList3_indonesian;
	document.getElementById('musicList4').innerText = musicList4_indonesian;

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
    document.getElementById('musicList1').innerText = musicList1_french;
	document.getElementById('musicList2').innerText = musicList2_french;
	document.getElementById('musicList3').innerText = musicList3_french;
	document.getElementById('musicList4').innerText = musicList4_french;

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

document.getElementById("languageDropbtn").innerHTML = `Language <i icon-name="chevron-down"></i>`;
document.getElementById("languageEnglish").innerText = 'English';
document.getElementById("languageIndonesian").innerText = 'Indonesian';
document.getElementById("languageFrench").innerText = 'French';