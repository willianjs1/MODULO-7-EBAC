const formulario = document.getElementById("meuFormulario");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const mensagemDiv = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const valorA = parseFloat(campoA.value);
  const valorB = parseFloat(campoB.value);

  if (valorB > valorA) {
    mensagemDiv.textContent = "Legal! Seu valor foi validado. B é maior que A.";
    mensagemDiv.style.color = "green";
  } else {
    mensagemDiv.textContent =
      "Desculpe! Seu valor inserido foi invalidado, tente novamente :). B deve ser maior que A.";
    mensagemDiv.style.color = "red";
  }
});
