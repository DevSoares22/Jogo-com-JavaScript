

// 5. botão continuar
document.getElementById("btnContinuar").addEventListener("click", function () {

    console.log("Botão clicado!");

    document.getElementById("jogo").innerHTML =
        "<p>" + nome + ", você encontrou um problema no sistema.</p>" +
        "<button onclick='escolha(1)'>Resolver</button>" +
        "<button onclick='escolha(2)'>Ignorar</button>";
});

// 6. função de escolha
function escolha(opcao) {
    let jogo = document.getElementById("jogo");

    if (opcao == 1) {
        jogo.innerHTML = "<p>Você resolveu o problema! 🎉</p>";
    } else {
        jogo.innerHTML = "<p>Você foi demitido 😢</p>";
    }
}
    let nomeSubordinado = localStorage.getItem("nomeSubordinado") || "Desconecido";
    const jogoElement = document.getElementById("jogo");
    jogoElement.innerHTML = `<p>Bem-vindo ao jogo, ${nomeSubordinado}! Aqui você enfrentará desafios para tentar sair do emprego. Faça suas escolhas com sabedoria!</p>`;

    const texto = document.getElementById("texto");
    const opcoes = document.getElementById("opcoes");