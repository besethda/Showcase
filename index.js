import SimpleParallax from "simple-parallax-js/vanilla";

let image = document.getElementsByClassName('background-img');
new SimpleParallax(image, {
  orientation: "right",
  scale: 1.4,
  delay: 0,
  overflow: true
});

//You can also choose to apply the parallax on multiple images:
