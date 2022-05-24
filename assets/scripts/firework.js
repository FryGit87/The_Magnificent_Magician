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

  const fireworks = [];
  const particles = [];
  const numberOfParticles = 50; // keep in mind performance degrades with higher number of particles

  const random = (min, max) => Math.random() * (max - min) + min;

  const getDistance = (x1, y1, x2, y2) => {
    const xDistance = x1 - x2;
    const yDistance = y1 - y2;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  };

  const image = new Image();

  let mouseClicked = false;

  canvas.width = width;
  canvas.height = height;

  image.src = "./assets/img/wand.png";

  const drawWand = () => {
    positions.wandX = width * 0.902 - image.width;
    positions.wandY = height * 0.934 - image.height;

    const rotationInRadians =
      Math.atan2(
        positions.mouseY - positions.wandY,
        positions.mouseX - positions.wandX
      ) - Math.PI;
    const rotationInDegrees = (rotationInRadians * 180) / Math.PI + 360;

    context.clearRect(0, 0, width, height);

    context.save(); // Save context to remove transformation afterwards
    context.translate(positions.wandX, positions.wandY);

    if (rotationInDegrees > 0 && rotationInDegrees < 75) {
      context.rotate((rotationInDegrees * Math.PI) / 180); // Need to convert back to radians
    } else if (rotationInDegrees > 75 && rotationInDegrees < 275) {
      context.rotate((75 * Math.PI) / 180); // Cap rotation at 75° if it the cursor goes beyond 75°
    }

    context.drawImage(image, -image.width, -image.height / 2); // Need to position anchor to right-middle part of the image

    // You can draw a stroke around the context to see where the edges are
    // context.strokeRect(0, 0, width, height);
    context.restore();
  };

  const attachEventListeners = () => {
    canvas.addEventListener("mousemove", (e) => {
      positions.mouseX = e.pageX;
      positions.mouseY = e.pageY;
    });
    canvas.addEventListener("mousedown", () => (mouseClicked = true));
    canvas.addEventListener("mouseup", () => (mouseClicked = false));
  };

  const loop = () => {
    requestAnimationFrame(loop);
    drawWand();
  };

  image.onload = () => {
    attachEventListeners();
    loop();
  };
})();
