const h2 = document.createElement("h2");
h2.textContent = "My name is Christina Kozanian and here a few things I enjoy:";

document.querySelector("body").appendChild(h2);


// Add a click event listener to the "prev" arrow
document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1); // Call the plusSlides function with -1 to show the previous slide
});

// Add a click event listener to the "next" arrow
document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1); // Call the plusSlides function with 1 to show the next slide
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlides() {
    showSlide(slideIndex);
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}