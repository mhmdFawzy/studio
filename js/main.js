const closeMenuButton = document.querySelector('#menu-close'),
    openMenuButton = document.querySelector('.open-menu'),
    menu = document.querySelector('.navbar-collapse');

function loadEvents() {
    closeMenuButton.addEventListener('click', closeMenu);
    openMenuButton.addEventListener('click', openMenu)
}
loadEvents();

function closeMenu() {
    $(menu).css('left','100%');
    $('.welcome-msg').css('z-index', '9');
    $('.down').css('z-index', 9);
    $(".home-sidelinks").css('z-index', 99);
    $('html').css('overflow-y', 'scroll')
    $('body').css('overflow-y', 'hidden')

}

function openMenu() {
    $(menu).css('left',' calc(100vw - 18rem)');
    menu.classList.add('appear-menu');
    $('body').css('overflow', 'hidden');
    $('.welcome-msg').css('z-index', '0');
    $('.down').css('z-index', 0);
    $(".home-sidelinks").css('z-index', 0);
    $('html').css('overflow-y', 'hidden');
    
}
$('.menu-list li').hover(function () {
    $(this).next().css('border-color', "#cc147f");
    $(this).mouseout(function () {
        $(this).next().css('border-color', "#fff");
    })
})