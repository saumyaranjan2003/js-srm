const form = document.getElementById('nameForm');
const userName = document.getElementById('userName');
const greeting = document.getElementById('greeting');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = userName.value;
  greeting.textContent = `Welcome to my webpage, ${name}!`;
});
