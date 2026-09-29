const words = [
  "MAGIA", "PIRATA", "ALIEN", "FOGO", "AQUÁTICO", "FANTOCHE",
  "ROSQUINHA", "COGUMELO", "ANOS 80", "SAMURAI", "CYBERPUNK", "OSSOS",
  "JATPACK", "RELÓGIO", "MANOPLA", "ALEATÓRIO", "ESPADA", "ÓCULOS", 
  "BIGODE", "ELÉTRICO", "ANIMAL", "MARTELO", "DINAMITE", "SERINGA",
  "CUECA", "FANTASMA", "CIENTISTA", "CAJADO", "CAPACETE", "4 BRAÇOS",
  "COXINHA", "TENTÁCULOS", "PELUDO", "MELECA", "BRASILEIRO", "FRUTA/LEG",
  "DOCE", "ASAS", "INSETO", "CAPA", "CHIFRES", "BEBÊ",
  "LIVRO", "LASER", "CYBORG",
];

const buttonDraw = document.querySelector("#draw");
const spanSelectedWord = document.querySelector("#selected-word");

buttonDraw.addEventListener("click", () => {
  const selectedNumber = Math.round(Math.random()*10);
  const selectedWord = words[selectedNumber];
  spanSelectedWord.innerText = selectedWord;
});
