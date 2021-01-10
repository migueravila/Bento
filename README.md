<div align="center">
    <h1>Bento</h1>
    <b>🍱 A Clean and Simple Startpage</b>
</div>

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/Header.png">
</p>

>  Wallpaper by [anima_contritum](https://www.reddit.com/user/anima_contritum)

## Index

- [Bento](#)
  - [Features](#features)
  - [Usage](#usage)
    - [Home Page](#as-home-page)
    - [New Tab](#as-new-tab)
  - [Customization](#customization)
    - [Links](#links)
    - [Colors](#colors)
    - [Theme Depending at the time](#theme-depending-at-the-time)
    - [Image Background](#image-background)
    - [Greetings](#greetings)
    - [Weather Info](#weather-info)
    - [Weather Icons](#weather-icons)

### Features:

- **Dark/Light** mode, you can toggle them and It'll be saved in local storage.
- **Clock and Date** format can be set to 24 hour (default) or 12 hour.
- **Greetings** are easy to modify.
- **Variables** for custom colors and font sizes in the `style.css` code.
- **Icons** all icons are from Feather Icons (Some others I made them with the Feather icons as a base)
- **Modular** javascript files for an easy read.

## Usage:

#### As Home Page:

1. Fork this repo
2. Enable the Github Pages service `Settings > GitHub Pages > Source [master branch] > Save`
3. Set it as Home Page:
   - Click the menu button. and select Options. Preferences.
   - Click the Home panel.
   - Click the menu next to Homepage and new windows and choose to show custom URLs and add your `Github Pages link`

#### As New Tab:

You can use different Add-ons/Extensions for it

- If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search)
- If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

## Customization

> All the code is using variables and is comented, It's easy to customize the project to your own, and this sections are the principal customizable elements in the Startpage:

### Links

You can change the links (and the icons too) in the HTML Code:

```html
<a
  href="https://github.com/"
  target="blank"
  class="buttonLink__link card buttonLink__link-1"
>
  <i class="buttonLink__icon" data-feather="github"></i>
</a>
```

Change the link in the `href` property with the link you want. (The `target="blank"` makes the link to open a new tab with the link you choose).
The Project uses [Feather icons](https://feathericons.com/) for the icons, and you can change them in the `data-feather=""` property with the name of the icon in the page.

### Colors

In the CSS code you can always change the variables for both themes (Dark and Light)

```css
/* Light theme  */
:root {
  --accent: #4b8ec4; /* Hover color */
  --bg: #f5f5f5; /* Background color */
  --sbg: #e4e6e6; /* Cards color */
  --fg: #3a3a3a; /* Foreground color */
  --sfg: #3a3a3a; /* Sceondary Foreground color */
}

/* Dark theme  */
.darktheme {
  --accent: #4b8ec4; /* Hover color */
  --bg: #19171a; /* Background color */
  --sbg: #201e21; /* Cards color */
  --fg: #d8dee9; /* Foreground color */
  --sfg: #3a3a3a; /* Secondary Foreground color */
}
```

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/SubHeader.png">
</p>

### Theme Depending at the time

In the `theme.js` file there's a section about changing the theme depending in the time. You have to 'Uncomment' that section to enable it:

```js
const today = new Date();
const Hr = today.getHours();

if (Hr >= 19 || Hr < 5) {
  enableDark();
} else {
  disableDark();
}
```

### Image Background

You can set your own background image with the variable `--imgbg` and set the route to the image you want It's disable by default. If you uncomment the variable, it has by default this image:

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/previewbg.png">
</p>

It has a black filter by default in `--imgcol`, and it'ts value is: `rgba(255, 255, 255, 0.7)` and `rgba(0, 0, 0, 0.7)` for the dark theme. You can change them and the opacity for a better experience with your image.

### Greetings

You can put your name and change the greetings.

```js
var name = "John Doe";
const gree1 = "Go to Sleep!  ";
const gree2 = "Good morning!  ";
const gree3 = "Good afternoon  ";
const gree4 = "Good evening,  ";
```

It'll change in order of the hour.

### Weather Info

For setting up the Weather widget you're going to need an API Key in: `https://openweathermap.org/`. Once you have your Key you'll need to set yourlatitude and longitude, you can use: `https://www.latlong.net/` to get them. Then you just have to fill them in the `weather.js` in the **js** folder:

```js
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = "XXXXXXXXXXXXXXXXXXXXXXXXXXX";

setPosition();

function setPosition(position) {
  // Here you can change your position
  // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
  let latitude = 37.774929;
  let longitude = -122.419418;

  getWeather(latitude, longitude);
}
```

> If you don't like to have your API Key public, you can make the repo into a private one. You can still use the Github Pages service.

### Weather Icons

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/previewico.png">
</p>

The weather icons are based in Feather icons and I made 4 sets of them:

- **Nord** Using the Nord Color Scheme and easy-to-eyes colors
- **OneDark** (_Default one_) Using the One Dark Pro color scheme
- **Dark** For White theme only users that want a minimalist look
- **White** For Dark theme only users that want a minimalist look

You set the icon theme changing this two lines of code in the `index.html` and `weather.js` files:

- If you want the Dark icon theme, change the `OneDark` to `Dark`
- If you want the White icon theme, change the `OneDark` to `White`
- If you want the Nord icon theme, change the `OneDark` to `Nord`

For example if I'd like to use the `Dark` icon theme:

```html
<div class="weather-icon">
  <img src="icons/OneDark/unknown.png" />
</div>

<!-- Change it to: -->

<div class="weather-icon">
  <img src="icons/Dark/unknown.png" />
</div>
```

```js
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/OneDark/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
  descElement.innerHTML = weather.description;
}

//Change it to:
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/Dark/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
  descElement.innerHTML = weather.description;
}
```