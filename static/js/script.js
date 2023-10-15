//reveal about.aboutPhoenix when clicking the xParkExpander//
const showAboutPhoenix = document.getElementById('phoenixParkExpander');
const showAboutDodder = document.getElementById('dodderExpander');
const showAboutBull = document.getElementById('aboutBull');
const aboutPhoenix = document.getElementById('aboutPhoenix');
const aboutDodder = document.getElementById('aboutDodder');
const aboutBull = document.getElementById('aboutBull');

//add event listener for phoenixParkExpander//
showAboutPhoenix.addEventListener('click', showAboutPhoenixDiv);

function showAboutPhoenixDiv(event) {
  event.preventDefault();
  if (aboutPhoenix.style.display ==='none') {
      aboutPhoenix.style.display = 'flex';
  } else {
      aboutPhoenix.style.display = 'none';
  }
}

showAboutDodder.addEventListener('click', showAboutDodderDiv);

function showAboutDodderDiv(event) {
  event.preventDefault();
  if (aboutDodder.style.display ==='none') {
      aboutDodder.style.display = 'flex';
  } else {
      aboutDodder.style.display = 'none';
  }
}
