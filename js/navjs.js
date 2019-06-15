const tagNav = document.querySelector('.tagNav');
const desktopnavbar = document.querySelector('.desktopnavbar');
const navButton = document.querySelector('.tagNav');
const body = document.querySelector('body');
const navList = document.querySelector('.navList');



navButton.addEventListener('click', mobileNav);

function mobileNav() {
    navButton.classList.toggle('transformBar');
    navList.classList.toggle('navListOpened');
    bodyContainer.classList.toggle('.bodyChange');
}


desktopnavbar.addEventListener('mouseover', function () {
    bodyContainer.style.opacity = '0';
    body.style.backgroundPositionY = "100px";
    document.querySelector('.desktopnavbar h6').innerHTML = 'Choose your page';
    document.querySelector('.hoverOverMe').style.display = 'none';
    document.querySelector('.choosePage').style.display = 'block';
});

desktopnavbar.addEventListener('mouseout', function () {
    bodyContainer.style.opacity = '1';
        document.querySelector('.hoverOverMe').style.display = 'block';
    document.querySelector('.choosePage').style.display = 'none';
    document.querySelector('.desktopnavbar h6').innerHTML = '▼';
    body.style.backgroundPositionY = "-120px";
}) 