// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

if (hour >= 23 || hour < 5) {
	document.getElementById('greetings').innerText = gree1_english + name;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greetings').innerText = gree2_english + name;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greetings').innerText = gree3_english + name;
} else {
	document.getElementById('greetings').innerText = gree4_english + name;
}
