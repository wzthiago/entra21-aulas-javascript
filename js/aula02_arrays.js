function definirArray() {
    console.log("Para criar um Array basta let nome = [] ");
    console.log("Para criar um Array com itens basta let nome = [1,2,3]");
    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ["Thiago, Time-001"];
    console.log(nomes);
}

definirArray();

function alertar(mensagem) {
    alert(mensagem);
}

var lista = ["Thiago, João, Sueli, Jô, Rô"];
function inserirArray(novo_nome) {
    lista.push(novo_nome);
    console.log(lista);
}

function listarFor() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com for o índice " + contador + "=" + lista[contador]);
    }
    console.log("-------------------");
    for (const item of lista) {
        console.log("Repetindo com for Inteligente sem contar o índice " + item);
    }
    console.log("------------------");
    lista.forEach(item => {
        console.log("Repetindo com foreach sem contar índice "+item);
    });
}
