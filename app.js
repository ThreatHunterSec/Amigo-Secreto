let amigos = []; // Array para armazenar os amigos

//Função 1
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
}
//Função 2
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}
//Função 3
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

