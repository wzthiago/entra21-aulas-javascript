
console.warn("READ");
let leitura = document.getElementById("paragrafo_ler");
console.log(leitura);
console.log("Apenas o conteúdo ou textContent", leitura.textContent);
console.log("Apenas o conteúdo mais elementos internos com HTML", leitura.innerHTML);

let aprendendo_leitura = document.getElementById("test_01");

console.log(aprendendo_leitura.textContent);
console.log(aprendendo_leitura.innerHTML);

console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")];
console.log("Lendo todos os paragrafos", paragrafos);
paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

console.warn("Write");
let escrita = document.getElementById("paragrafo_escrever");
escrita.title = "www.google.com";
escrita.textContent = "Esse paragrafo foi escrito com javascript";

document.getElementById("ta_aqui").textContent = "Botao alterado com js";

let mudar_texto = document.getElementById("alterar_1");
mudar_texto.title = "Mudou_title";
mudar_texto.textContent = "Mudou...000";

let mudar_texto2 = document.getElementById("alterar_2");
mudar_texto2.title = "Mudou_title_02";
mudar_texto2.textContent = "Mudou...Novamente...";

function mudarTexto(conteudo) {
    let elemento = document.getElementById("qualquer");
    elemento.title = conteudo;
    elemento.textContent = conteudo;

}

function addConteudo(conteudo) {
    let enter = document.createElement("br");
    document.body.append(enter);
    let elemento = document.createElement("div");
    elemento.textContent = conteudo;
    document.body.append(elemento);

}
