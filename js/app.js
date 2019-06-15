//Created by Edward
const welcomeImage = document.querySelector('.welcome')


window.addEventListener('scroll', function () {
   
     const scroll = window.scrollY;
    if (window.scrollY > 600) {
    
        welcomeImage.style.opacity = '0';
         
        }else {
            welcomeImage.style.opacity = '1';
        }
});

window.addEventListener('scroll', function () {
   
     const scroll = window.scrollY;
    if (window.scrollY > 500) {
        document.querySelector('#home1').style.opacity = '1';
        document.querySelector('#home2').style.opacity = '1';
        document.querySelector('#home3').style.opacity = '1';

        }else {
            document.querySelector('#home1').style.opacity = '0';
            document.querySelector('#home2').style.opacity = '0';
            document.querySelector('#home3').style.opacity = '0';
            
        }
});



function UpPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
};

