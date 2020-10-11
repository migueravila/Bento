<div align="center">
<h1>Bento: 🍱 A Clean and Simple Startpage</h1>
</div>

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/preview.png">
</p>

## Index

-   [Bento](#)
    -   [Features](#features)
    -   [Usage](#usage)
        -   [Home Page](#as-home-page)
        -   [New Tab](#as-new-tab)
    -   [Customization](#customization)
        -   [Links](#links)
        -   [Colors](#colors)
        -   [Image Background](#image-background)
        -   [Greetings](#greetings)
        -   [Wather Info](#weather-info)
        -   [Weather Icons](#weather-icons)

### Features:

-   **Dark/Light** mode, you can toggle them and It'll be saved in local store
-   **Clock and Date** format can be set to 24 hour (default) or 12 hour
-   **Greetings** are easy to change and modify
-   **Variables** for custom colors and font sizes in the `css` code
-   **Icons** all icons are from Feather Icons (Some others I made them with the Feather icons as a base)
-   **Modular** javascript files for an easy read

## Usage:

#### As Home Page:

1. Fork this repo
2. Enable the Github Pages service `Settings > GitHub Pages > Source [master branch] > Save`
3. Set it as Home Page:
    - Click the menu button. and select Options. Preferences.
    - Click the Home panel.
    - Click the menu next to Homepage and new windows and choose to show custom URLs and add your `Github Pages link`

#### As New Tab:

1. You can use different Add-ons/Extensions for it

-   If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search)
-   If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

## Customization

> All the code is using variables and is comented, It's easy to customize the project to your own, and this sections are the principal customizable elements in the Startpage:

### Links

You can change the links (and the icons too) in the HTML Code:

```html
  <a 
    href="https://github.com/" 
    target="blank" 
    class="qlink__link qlink__link-1"
  >
    <i class="qlink__icon" data-feather="github"></i>
  </a>
```

Change the link in the `href` property with the link you want. (The `target="blank"` makes the link to open a new tab with the link you choose).
The Project uses [Feather icons](https://feathericons.com/) for the icons, and you can change them in the `data-feather=""` property with the name of the icon.

### Colors

In the CSS code you can always change the variables for both themes (Dark and Light)

```css
/* Light theme  */
:root {
    --accent: #186efdaa;
    --bg: #f5f5f5;
    --sbg: #e4e6e6;
    --fg: #3a3a3a;
    --imgcol: linear-gradient(
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
    );
}

/* Dark theme  */
.darktheme {
    --accent: #186efd60;
    --bg: #1e1f21;
    --sbg: #2c2d31;
    --fg: #d8dee9;
    --imgcol: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
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
var name = 'John Doe';
var lateTxt = 'Go to Sleep! ';
var morningTxt = 'Good morning! ';
var afterTxt = 'Good afternoon ';
var evenTxt = 'Good evening ';
```

It'll change in order of the hour.

### Weather Info

For setting up the Weather widget you're going to need an API Key in: `https://openweathermap.org/`. Once you have your Key you'll need to set yourlatitude and longitude, you can use: `https://www.latlong.net/` to get them. Once you have the data, you'll need to set them in the `weather.js` in the **js** folder. The code is

> If you don't like to have your API Key public, you can make the repo into a private one. You can still use the Github Pages service.

### Weather Icons

<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/previewico.png">
</p>

The icons by themselves have now 4 different color schemes:

-   **Nord** Using the Nord Color Scheme and easy-to-eyes colors
-   **OneDark** (Default one) Using the One Dark Pro color scheme
-   **Dark** For White theme only users that want a minimalist look
-   **White** For Dark theme only users that want a minimalist look

You set the icon theme changing this two lines of code in the `index.html` and `weather.js` files:

-   If you want the Dark icon theme, change the `OneDark` to `Dark`
-   If you want the White icon theme, change the `OneDark` to `White`
-   If you want the Nord icon theme, change the `OneDark` to `Nord`

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
