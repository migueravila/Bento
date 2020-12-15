// Store the theme
let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');

const enableDark = () => {
    document.body.classList.add('darktheme');
    localStorage.setItem('darkTheme', 'enabled');
    themeToggle.innerHTML = `<i id="bicon" data-feather="moon"></i>`;
    feather.replace();
};

const disableDark = () => {
    document.body.classList.remove('darktheme');
    localStorage.setItem('darkTheme', null);
    themeToggle.innerHTML = `<i id="bicon" data-feather="sun"></i>`;
    feather.replace();
};

if (darkTheme === 'enabled') {
    enableDark();
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

// Set automatic mode on load page
window.onload = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // set dark mode
        localStorage.setItem('darkTheme', 'enabled');
        enableDark()
    } else {
        //set light mode
        localStorage.setItem('darkTheme', null)
        disableDark()
    }
};

//Automatic detection dark/light mode
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
    if (event.matches) {
        localStorage.setItem('darkTheme', 'enabled');
        enableDark();
    } else {
        localStorage.setItem('darkTheme', null);
        disableDark();
    }
});

// Change the theme with the time

// const today = new Date();
// const Hr = today.getHours();

/*
if (Hr >= 19 || Hr < 5) {
    enableDark();
} else {
    disableDark();
}
*/