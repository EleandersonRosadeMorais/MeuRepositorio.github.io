// Um efeito simulando um click no botão
document.querySelectorAll("button").forEach((botao) => {
    botao.addEventListener("click", () => {
        // Aplica o efeito de click e depois some.
        botao.classList.add("clicado");
        setTimeout(() => botao.classList.remove("clicado"), 300);
    });
});



// Função que atualiza o ícone do botão conforme o tema
const botaoAlternar = document.getElementById("alternarTema");
const corpo = document.body;
function atualizarIcone() {
    if (corpo.classList.contains("tema-escuro")) {
        // Se o tema for escuro, coloca o ícone do sol
        botaoAlternar.textContent = "☀️ Alternar Tema";
    } else {
        // Se for o tema claro, coloca o ícone da lua
        botaoAlternar.textContent = "🌙 Alternar Tema";
    }
}



// o botão vai alternar o tema quando clicado
botaoAlternar.addEventListener("click", () => {
    // Aqui faz a seleção do tema, como se fosse um "liga e desliga"
    corpo.classList.toggle("tema-escuro");
    // Salva o tema para quando atualizar a página ou fecha-lá, manter a cor do tema
    if (corpo.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
    // Atualiza o ícone com o novo tema
    atualizarIcone();
    atualizarCorSubtitulos();
});



// Aqui ele irá verificar qual tema a página estava antes de fecha-lá ou atualiza-lá, 
// para ao abrir a página, continue com o último tema selecionado
window.addEventListener("load", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        // Se o tema salvo for escuro, aplica ele direto
        corpo.classList.add("tema-escuro");
    }
    // Chama a função pra mostrar o ícone certo
    atualizarIcone();
    atualizarCorSubtitulos()
});




// Aqui as informações das divs aumentam
let caixas = document.querySelectorAll("div");
caixas.forEach(function (caixa) {
    caixa.addEventListener("mouseover", function () {
        // ao passar o mouse as informações ficam maiores
        caixa.classList.add("ampliar");
    });

    caixa.addEventListener("mouseout", function () {
        // ao tirar o mouse, as informações voltam ao normal
        caixa.classList.remove("ampliar");
    });
});



// Aqui as informações das listas aumentam
let itens = document.querySelectorAll(".item");
itens.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        // ao passar o mouse as informações ficam maiores
        item.classList.add("aumentar");
    });

    item.addEventListener("mouseout", function () {
        // ao tirar o mouse, as informações voltam ao normal
        item.classList.remove("aumentar");
    });
});



// Código referente a mudança das cores dos h3 das divs
let textosVermelhos = document.querySelectorAll(".subTitulos");
textosVermelhos.forEach(function (textos) {
    // ao mouse passar por cima a cor da letra mudará para vermelho
    textos.addEventListener("mouseover", function () {
        textos.style.color = "red";
    });
    // ao tirar o mouse de cima, ele irá executar a função AtualizarCorSubtitulos
    textos.addEventListener("mouseout", function () {
        atualizarCorSubtitulos();
    });
});



// complemento do código anterior sobre mudar as cores do h3
// mas aqui ele resolve o erro de quando altera o tema
function atualizarCorSubtitulos() {
    // Crianção de uma constante sobre o tema salvo no localstorage
    // localStorage.getItem("tema") ja criado anteriormente
    const temaSalvo = localStorage.getItem("tema");
    textosVermelhos.forEach(function (textos) {
        // Se o tema salvo for escuro a letra irá mudar para branco
        if (temaSalvo === "escuro") {
            textos.style.color = "white";
            // caso o tema for branco irá mudar a letra para preto
        } else {
            textos.style.color = "black";
        }
    });
}