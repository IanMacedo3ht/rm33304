const jogoContainer = document.querySelector(".container");
const playerResult = document.querySelector(".player_result img");
const botResult = document.querySelector(".bot_result img");
const resultado = document.querySelector(".resultado");
const opcoes = document.querySelectorAll(".opcao");

const botImagens = ["IMG/pedra.png", "IMG/papel.png", "IMG/tesoura.png"];
const outcomes = {
  RR: "Empate",
  RP: "BOT Ganhou",
  RS: "VOCÊ Ganhou",
  PP: "Empate",
  PR: "VOCÊ Ganhou",  
  PS: "BOT Ganhou",
  SS: "Empate", 
  SR: "BOT Ganhou",
  SP: "VOCÊ Ganhou",
};

function handleOptionClick(event) {
  const Imagemclicada = event.currentTarget;
  const clique = Array.from(opcoes).indexOf(Imagemclicada);

  playerResult.src = botResult.src = "IMG/pedra.png";
  resultado.textContent = "Espere...";

  opcoes.forEach((image, index) => {
    image.classList.toggle("active", index === clique);
  });

  jogoContainer.classList.add("start");

  setTimeout(() => {
    jogoContainer.classList.remove("start");

    const playerImagemSrc = Imagemclicada.querySelector("img").src;
    playerResult.src = playerImagemSrc;

    const Numeroale = Math.floor(Math.random() * botImagens.length);
    const botImagemSrc = botImagens[Numeroale];
    botResult.src = botImagemSrc;

    const playerValue = ["R", "P", "S"][clique];
    const botValue = ["R", "P", "S"][Numeroale];
    const tecla = playerValue + botValue;
    const outcome = outcomes[tecla] || "Unknown";

    resultado.textContent = playerValue === botValue ? "Partida empatada" : `${outcome} `;
  }, 2500);
}

opcoes.forEach(image => {
  image.addEventListener("click", handleOptionClick);
});