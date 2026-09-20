const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function desenharTelaInicial() {
    ctx.fillStyle = '#00e88f';
    ctx.font = '24px Segoe UI';
    ctx.fillText('Aguardando início do jogo...', 240, 200);
}

window.onload = desenharTelaInicial;

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    resultado.innerHTML = `
        <h4 style="color: #00e88f; margin: 0 0 5px 0;">Jogador Registrado!</h4>
        <p style="margin: 3px 0;"><strong>Nome:</strong> ${nome}</p>
        <p style="margin: 3px 0;"><strong>E-mail:</strong> ${email}</p>
        <p style="margin: 3px 0;"><strong>Modo:</strong> ${curso}</p>
    `;

    alert(`Bem-vindo, ${nome}! Cadastro concluído com sucesso.`);
});

formulario.addEventListener("reset", function() {
    resultado.innerHTML = "";
});