var timer = setInterval(function() {plusSlides(1)}, 5000)
var slideIndex = 0;
showSlides(slideIndex)

const slideContainer = document.querySelector('[wm-slideshow]')
slideContainer.onmouseover = () => {
    clearInterval(timer)
}

slideContainer.onmouseout = () => {
    timer = setInterval(function() {plusSlides(1)}, 5000)
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1
    }

    else if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}


/*function scrollFunction() {
    const newHeader = document.querySelector('header')
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        newHeader.classList.add('header-fixed')
    } else {
        newHeader.classList.remove('header-fixed')
    }
}

window.onscroll = function() {scrollFunction()};*/