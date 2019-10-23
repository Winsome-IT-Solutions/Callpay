const labels = document.getElementsByTagName("label");
const radioBtn = document.querySelectorAll("input[type='radio']");

radioBtn.forEach(elem =>
  elem.addEventListener("click", event => {
    for (const label of labels) {
      if (label.attributes[0].value === event.target.id)
        label.children[0].src = "img/dotfilled.png";
      else label.children[0].src = "img/dot.png";
    }
  })
);
