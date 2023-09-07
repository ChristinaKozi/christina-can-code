

const h2 = document.createElement("h2");
h2.textContent = "My name is Christina Kozanian and here a few things I enjoy:";

document.querySelector("body").appendChild(h2);


let slideIndex = 1; // Start with the first slide

// Function to show a specific slide
function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1; // If at the end, start from the beginning
  }
  if (n < 1) {
    slideIndex = slides.length; // If at the beginning, go to the end
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Function to navigate to the previous slide
function prevSlide() {
  showSlide((slideIndex -= 1));
}

// Function to navigate to the next slide
function nextSlide() {
  showSlide((slideIndex += 1));
}

// Initial call to display the first slide
showSlide(slideIndex);

// Event listeners for prev and next buttons
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);