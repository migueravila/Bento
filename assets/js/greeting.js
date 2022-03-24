// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

let greeting = '';

if (hour >= 23 || hour < 5) {
  greeting = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  greeting = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  greeting = gree3 + name;
} else {
  greeting = gree4 + name;
}

// replace any name templates with the users name
greeting = greeting.replace("{name}", name)

// remove duplicate name
// (easier and more readable than checking if the name
// template was used in each greeting)

// if the index of the first mention of the users name is not equal to the index of the name
// at the end...
if (greeting.indexOf(name) !== (greeting.length - name.length)) {
  // ...assume the user used the name template and remove the name at the end
  const lastNameIndex = greeting.length - name.length
  greeting = greeting.slice(0, lastNameIndex)
}

document.getElementById('greetings').innerText = greeting;
