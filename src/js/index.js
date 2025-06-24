// Seleciona todos os botões dentro da <ul class="botoes">
const botoes = document.querySelectorAll(".botoes button");

// Lista de IDs das seções correspondentes a cada botão
const idsDasClasses = [
  "berserk",
  "espancador",
  "ilusionista",
  "assassino",
  "desbravador",
  "curandeiro",
  "druida"
];

// Associa o clique de cada botão ao scroll para a classe correspondente
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const id = idsDasClasses[indice];
    const secao = document.getElementById(id);
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth" });
    }
  });
});
