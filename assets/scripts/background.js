(() => {
  const canvas = document.getElementById("background");
  const context = canvas.getContext("2d");

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Set canvas to fullscreen
  canvas.width = width;
  canvas.height = height;
  const drawBackground = () => {
    // starts from x, y to x1, y1
    const background = context.createLinearGradient(0, 0, 0, height);
    background.addColorStop(0, "#000B27");
    background.addColorStop(1, "#6C2484");

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);
  };
  const drawForeground = () => {
    context.fillStyle = "#0C1D2D";
    context.fillRect(0, height * 0.95, width, height);

    context.fillStyle = "#182746";
    context.fillRect(0, height * 0.955, width, height);
  };
  const drawWizard = () => {
    const image = new Image();
    image.src = "./assets/img/wizard.png";

    image.onload = function () {
      /**
       * this - references the image object
       * draw at 90% of the width of the canvas - the width of the image
       * draw at 95% of the height of the canvas - the height of the image
       */
      context.drawImage(
        this,
        width * 0.9 - this.width,
        height * 0.95 - this.height
      );
    };
  };

  drawBackground();
  drawForeground();
  drawWizard();
})();
