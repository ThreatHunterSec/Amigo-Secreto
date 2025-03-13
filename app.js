let amigos = []; // Array para armazenar os amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Pega o valor do input
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome."); // Validação do campo vazio
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada

    atualizarLista(); // Atualiza a exibição da lista
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li"); // Cria um item <li>
        li.textContent = amigo; // Define o texto como o nome do amigo
        lista.appendChild(li); // Adiciona à lista
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!"); // Garante que há amigos na lista
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}
