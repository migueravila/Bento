// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'John Doe';

// Here you can change your greetings
var gree1 = 'Go to Sleep! ';
var gree2 = 'Good morning! ';
var gree3 = 'Good afternoon ';
var gree4 = 'Good evening ';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else  {
    document.getElementById('greetings').innerText = gree4 + name;
}
