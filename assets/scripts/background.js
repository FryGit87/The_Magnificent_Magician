(() => {
  const canvas = document.getElementById("background");
  const context = canvas.getContext("2d");

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Set canvas to fullscreen
  canvas.width = width;
  canvas.height = height;
})();
