// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' John Doe';

// Here you can change your greetings
const gree1 = 'Go to Sleep!  ';
const gree2 = 'Good morning!  ';
const gree3 = 'Good afternoon  ';
const gree4 = 'Good evening,  ';
const gree5 = 'Good evening,  ';
const gree6 = 'Good evening,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
