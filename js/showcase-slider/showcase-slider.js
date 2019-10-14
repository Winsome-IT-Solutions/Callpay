const startSlider = () => {
  let i = 1;
  const move = () => {
    i = (i % 2) + 1;
    document.getElementById(`i${i}`).checked = true;
  };
  setInterval(move, 3000);
};

window.onload = startSlider();
