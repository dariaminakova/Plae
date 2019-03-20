// slider section

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    
    if(n >slides.length){
        slideIndex = 1;
    }    
    if(n <1){
        slideIndex = slides.length;
    }
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "block";
}

// email

// user validation 
function validateEmail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
    let address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
}
// user validation 
