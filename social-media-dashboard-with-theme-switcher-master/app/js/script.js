const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const darkButton = document.querySelector('#dark');
const lightButton = document.querySelector('#light');

radioButtons.forEach(button => button.addEventListener('click', colorChecker))

function colorChecker() {
 if (document.getElementById('dark').checked) {
  localStorage.setItem('colorScheme', 'dark')
 } else {
  localStorage.setItem('colorScheme', 'light')
 }
 setColorScheme()
}

function setColorScheme() {
 if (localStorage.getItem("colorScheme") == 'dark') {
  setDarkMode()
 } else if (localStorage.getItem("colorScheme") == 'light') {
  setLightMode();
 }
}

function setDarkMode() {
 document.querySelector("body").classList = 'dark';
}

function setLightMode() {
 document.querySelector("body").classList = 'light'
}

function getColorScheme() {
 if (window.matchMedia("(prefers-color-scheme : light)").matches) {
  lightButton.click()
 } else {
  darkButton.click()

 }
}
getColorScheme()

function getColorMode() {
 localStorage.getItem('colorScheme')
}

function checkModeChange() {
 window.matchMedia("(prefers-color-scheme : light)").addEventListener('change', event => {
    console.log(event);
  if (event.matches) {
   // ...
  }
  getColorMode()
 })
}