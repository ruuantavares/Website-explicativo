// Seleciona o elemento <p> pelo id
const texto = document.getElementById("texto-exemplo");

// Seleciona o botão pelo id
const botao = document.getElementById("btn-alterar");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function () {
  // Altera o conteúdo do <p>
  texto.textContent =
    "Parabéns! Você clicou no botão e o JavaScript mudou o texto!";
});
const texto2 = document.getElementById("texto-cor");

const botao_cor = document.getElementById("btn-alterar-cor");

botao_cor.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
  texto2.textContent = "Parabéns! Você mudou a cor do fundo da página!";
});


const display = document.getElementById("contador");
const btnAumentar = document.getElementById("aumentar");
const btnDiminuir = document.getElementById("diminuir");
const btnResetar = document.getElementById("resetar");

// Cria uma variável para armazenar o valor do contador
let contador = 0;

// Função para atualizar o display
function atualizarDisplay() {
  display.textContent = contador;
}

// Evento para aumentar o contador
btnAumentar.addEventListener("click", function () {
  contador++;
  atualizarDisplay();
});

// Evento para diminuir
btnDiminuir.addEventListener("click", function () {
  contador--;
  atualizarDisplay();
});

// Evento para resetar
btnResetar.addEventListener("click", function () {
  contador = 0;
  atualizarDisplay();
});
