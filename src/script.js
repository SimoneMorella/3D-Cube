const container = document.querySelector(".container");

document.addEventListener("click", (event) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  container.style.transform = `translate(${(event.clientX) - centerX}px, ${(event.clientY) - centerY}px)`
})

