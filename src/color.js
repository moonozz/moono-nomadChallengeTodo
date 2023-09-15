const colors = [
  "#F6ECC9",
  "#CC6B6B",
  "#EB7A53",
  "#A8D672",
  "#7CC5EF",
  "#CFF14B",
  "#FFFFFF",
  "#C6A7FB",
  "#2CB67A",
  "#F6D059",
  "#7FC4ED",
  "#FFDAEB",
];

const bgColor = document.querySelector("#phone");

const bgColorChange = () => {
  const colorChange = colors[Math.floor(Math.random() * colors.length)];

  bgColor.style.background = colorChange;
};

bgColorChange();
