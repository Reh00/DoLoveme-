const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

noBtn.addEventListener("mouseover", () => {
  const offsetX = Math.floor(Math.random() * 100) - 50;
  const offsetY = Math.floor(Math.random() * 100) - 50;

  const currentLeft = noBtn.offsetLeft;
  const currentTop = noBtn.offsetTop;

  const newLeft = currentLeft + offsetX;
  const newTop = currentTop + offsetY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newLeft}px`;
  noBtn.style.top = `${newTop}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 3000);
});
