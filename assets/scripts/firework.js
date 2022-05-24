(() => {
  const canvas = document.getElementById("firework");
  const context = canvas.getContext("2d");

  const width = window.innerWidth;
  const height = window.innerHeight;

  const positions = {
    mouseX: 0,
    mouseY: 0,
    wandX: 0,
    wandY: 0,
  };

  const image = new Image();

  canvas.width = width;
  canvas.height = height;

  image.src = "./assets/img/wand.png";
  image.onload = () => {
    attachEventListeners();
    loop();
  };
})();
