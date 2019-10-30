const slider = document.querySelector("#slider"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right");
let current = 0;
let slideInterval;
let slideTimeout;

const slideRight = () => {
  if (current === 4) current = 0;
  slider.style.left = `${-100 * current}%`;
  current++;
};

const slideLeft = () => {
  if (current === 1) current = 4;
  else current--;
  slider.style.left = `${-100 * (current - 1)}%`;
};

const startSlider = () => {
  slideInterval = setInterval(slideRight, 2500);
};

arrowLeft.addEventListener("click", () => {
  stopSlider();
  slideLeft();
  slideTimeout = setTimeout(startSlider, 500);
});

arrowRight.addEventListener("click", () => {
  stopSlider();
  slideRight();
  slideTimeout = setTimeout(startSlider, 500);
});

const stopSlider = () => {
  clearInterval(slideInterval);
  clearTimeout(slideTimeout);
};

slider.addEventListener("mouseenter", () => {
  stopSlider();
});

slider.addEventListener("mouseleave", () => {
  slideTimeout = setTimeout(startSlider, 500);
});

window.onload = () => {
  arrowRight.click();
};
