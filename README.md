
<div align="center">
<h1>Bento: 🍱 A Clean and Simple Startpage</h1>
</div>

![](https://github.com/MiguelRAvila/Bento/blob/master/assets/preview.png)

### Index

-   [Bento](#)
    -   [Features](#features)
    -   [Usage](#usage)
         - [Home Page](#as-home-page)
         - [New Tab](#as-new-tab)
    -   [Customization](#customization)

#### Features:

- **Dark/Light** mode, you can toggle them and It'll be saved in local store
-   **Clock and Date** format can be set to 24 hour (default) or 12 hour
-   **Greetings** are easy to change and modify
-   **Variables** for custom colors in the `css` code
-   **Modular** javascript files for an easy read


<p align="center">
  <img src="https://github.com/MiguelRAvila/Bento/blob/master/assets/preview.gif">
</p>

### Usage:

#### As Home Page:
1. Fork this repo
2. Enable the Github Pages service `Settings > GitHub Pages > Source [master branch] > Save`
3. Set it as Home Page:
    - Click the menu button. and select Options. Preferences.
    - Click the Home panel.
    - Click the menu next to Homepage and new windows and choose to show custom URLs and add your `Github Pages link`

#### As New Tab:
1. You can use different Add-ons/Extensions for it
  - If you use Firefox:[Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search)
  - If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

### Customization

#### Colors
In the CSS code you can always change the variables for both themes (Dark and Light)

#### Weather Widget

For setting up the Weather widget you're going to need an API Key in: `https://openweathermap.org/`. Once you have your Key you'll need to set yourlatitude and longitude, you can use: `https://www.latlong.net/` to get them. Once you have the data, you'll need to set them in the `weather.js` in the **js** folder.

> If you don't like the idea of having your API Key public, you can make the repo into a private one. You can still use the Github Pages service.
