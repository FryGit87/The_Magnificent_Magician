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

  drawBackground();
})();
