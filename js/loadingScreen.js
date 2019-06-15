const bodyContainer = document.querySelector('.bodyTransparentNav');

function loadingScreenTime() {
    bodyContainer.style.display = 'none';
    document.querySelector('.loadingScreen').style.display = 'block';
    window.setTimeout(function loadingScreenDone() {
    bodyContainer.style.display = 'block';
    document.querySelector('.loadingScreen').style.display = 'none';
    }, 1000);
    
};
