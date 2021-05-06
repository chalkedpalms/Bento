// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Michael';

// Here you can change your greetings
const gree1 = 'Bonsoir!  ';
const gree2 = 'Bonjour!  ';
const gree3 = 'Salut  ';
const gree4 = 'Ciao,  ';
const gree5 = 'Bonsoir,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 15) {
  document.getElementById('greetings').innerText = gree3 + name;
} else if (hour >= 15 && hour < 18) {
  document.getElementById('greetings').innerText = gree4 + name;
  else {
  document.getElementById('greetings').innerText = gree5 + name;
}
