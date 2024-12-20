const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const card = document.getElementById("card");

// Função para movimentar o botão "Não"
noButton.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const randomX = Math.random() * (containerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (containerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// Mostrar o card quando o botão "Sim" for clicado
yesButton.addEventListener("click", () => {
  card.classList.remove("hidden");
  document.body.style.background = "rgba(0, 0, 0, 0.5)";
});
