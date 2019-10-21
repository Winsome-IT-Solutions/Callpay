let slideIndex = 1;
let myTimer;
let slideshowContainer;

const plusSlides = n => {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function() {
      plusSlides(n + 2);
    }, 3000);
  } else {
    myTimer = setInterval(function() {
      plusSlides(n + 1);
    }, 3000);
  }
};

const currentSlide = n => {
  clearInterval(myTimer);
  myTimer = setInterval(() => {
    plusSlides(n + 1);
  }, 3000);
  showSlides((slideIndex = n));
};

const showSlides = n => {
  const slides = document.getElementsByClassName("slide");
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
};

const pause = () => {
  clearInterval(myTimer);
};

const resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(() => {
    plusSlides(slideIndex);
  }, 3000);
};

// window.onload = () => {
//   showSlides(slideIndex);
//   myTimer = setInterval(function() {
//     plusSlides(1);
//   }, 3000);

//   slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];
//   slideshowContainer.addEventListener("mouseenter", pause);
//   slideshowContainer.addEventListener("mouseleave", resume);
// };
