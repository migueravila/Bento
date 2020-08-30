let dark = document.getElementById('dark');
let light = document.getElementById('light');
let body = document.body;
let theme = localStorage.getItem('theme');
let toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', function() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        toggleTheme.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light');
        toggleTheme.textContent = 'Light';
        localStorage.setItem('theme', 'light');
  }
});

function getTheme() {
    body.classList.add(theme)
    toggleTheme.textContent = theme;
}
getTheme();