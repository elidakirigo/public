const img = ['./images/desktop-image-hero-1.jpg', './images/desktop-image-hero-2.jpg', './images/desktop-image-hero-3.jpg'];
let column_index = 1,
    max_detail_index = 3

function prev() {
    column_index--;

    if (column_index < 1) column_index = max_detail_index;

    for (let index = 1; index <= max_detail_index; index++) {
        document.querySelector(`.column-${index} `).classList.remove('show')

    }
    // document.querySelector('.big_image').removeAttribute('src')  
    document.querySelector('.big_image').setAttribute('src', img[column_index - 1])
    document.querySelector(`.column-${column_index}`).classList.add('show')
}

function next() {
    column_index++;

    if (column_index > max_detail_index) column_index = 1;

    for (let index = 1; index <= max_detail_index; index++) {
        document.querySelector(`.column-${index} `).classList.remove('show')
    }
    document.querySelector('.big_image').setAttribute('src', img[column_index - 1])
    document.querySelector(`.column-${column_index}`).classList.add('show')
}
let toggle_index = 1;

function toggleclose() {
    toggle_index ? openNavbar() : closeNavbar()
}

function openNavbar() {
    toggle_index = 0;
    document.querySelector('.x').setAttribute("src",'./images/icon-close.svg')
    $('body').css({
        'flex-direction': 'column'
    });
    $('nav').css({
        'position': 'relative',
        'background-color': 'var(--White)'
    });
    $('nav a h1').css('display', 'none');
    $('nav a h5').css('display', 'block');
    // document.querySelector('.x').setAttribute('onclick', 'openNavbar()')

}

function closeNavbar() {
    document.querySelector('.x').setAttribute('src', './images/icon-hamburger.svg')
    
    // document.querySelector('.x').setAttribute('onclick', 'closeNavbar()')
    $('body').css({
        'flex-direction': 'row'
    });
    $('nav').css({
        'position': 'absolute',
        'background-color': 'transparent'
    });
    $('nav a h1').css('display', 'block');
    $('nav a h5').css('display', 'none');
    toggle_index = 1;
}