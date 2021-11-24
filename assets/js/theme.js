// ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘

// Store the theme
let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');
const bodyBackground = document.getElementById('#body');

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add('darktheme');
  localStorage.setItem('darkTheme', 'enabled');
  themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
  lucide.createIcons();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove('darktheme');
  localStorage.setItem('darkTheme', null);
  themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
  lucide.createIcons();
};

//Toggle theme
if (darkTheme === 'enabled') {
  // Temporarily disable transitions when changing theme on startup
  document.body.classList.add('notransition');
  enableDark();
  document.body.offsetHeight; // Trigger reflow to flush CSS changes
  document.body.classList.remove('notransition');
} else {
  disableDark();
}

themeToggle.addEventListener('click', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enableDark();
  } else {
    disableDark();
  }
});

if (CONFIG.imageBackground) {
  document.body.classList.add('withImageBackground');
}
