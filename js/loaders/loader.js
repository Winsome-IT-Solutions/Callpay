const loader = document.querySelector(".loader-live");

window.onload = setTimeout(() => {
  loader.style.animation = "fadeOut 0.2s ease-in-out forwards";
  setTimeout(() => (loader.style.display = "none"), 250);
}, 1000);
