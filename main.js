let numeroAleatorio = Math.florr(math.random() *100) + 1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1
let botaoReiniciar;
                                       
function verificarPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }

palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
  ultimoResultado.textContent = "Parabéns! Você Acertou!";
  ultimoResultado.style.backgroundColor = "green";
  baixoOuAlto.textContent = "";
  finalizarJogo();
} else if (contagemPalpites === 10)
    ultimoResultado.textcontent = "FIM DE JOGO!"
    baixoOuAlto.textcontent = "";
    finalizarJogo();
} else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario = numeroAleatorio) {
        baixoOuAlto.textcontent = "O ultimo palpite foi muito baixo"
} else if {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario = numeroAleatorio) {
        baixoOuAlto.textcontent = "O ultimo palpite foi muito alto"
    }
