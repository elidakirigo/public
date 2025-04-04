const toggle_icon = document.getElementById('toggle_icon')
let indexLevel = 1;

function ButtonShow() {
    indexLevel ? buttonX() : buttonHumburger();
    indexLevel ? menuShow() : menuHide();
}

function buttonX() {
    toggle_icon.setAttribute('src', './images/icon-close.svg')
    indexLevel = 0

}

function buttonHumburger() {
    toggle_icon.setAttribute('src', './images/icon-hamburger.svg')
    indexLevel = 1

}

function menuShow() {
    document.querySelector('.header ul').style.display = 'none'
    document.querySelector('main .overlay').style.display = 'none'
}

function menuHide() {
    document.querySelector('.header ul').style.display = 'flex'
    document.querySelector('main .overlay').style.display = 'block'

}