
procedimento(); // chamada
// Essa função está sendo chamada e não precisa de argumentos
bemVindo("Thiago");
bemVindo(true);
bemVindo(30);
bemVindo(bemVindo);
bemVindo(1.78);

login("Thiago", "12345")

maiorIdade(15);

let resultado = maiorIdade(16);
console.log(resultado);

console.log(maiorIdade(18));

let concatenado = maiorIdade(10) + maiorIdade(20);
console.log(concatenado);

console.log(calcularMedia(8, 9, 10));

console.log(verificarSituacao(5));

console.log(
    verificarSituacao(
        calcularMedia(8, 9, 10))
);



function procedimento() { // declaração
    console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parâmetros para deixar dinâmico");
    console.warn("Essa função também não retorna nada");
}

procedimento(); // chamada

function bemVindo(nome) {
    console.log(typeof (nome));
    console.warn("Bem Vindo ", nome);  //executando um de cada 
    //console.warn("Bem Vindo "+nome); //concatenando
    // console.warn(`Bem vindo ${nome}`);
}

function login(userName, password) {
    console.error("O usuário " + userName + " cuja senha é " + password + " está inadimplente, não pode entar")
}

function maiorIdade(idade) {
    if (idade < 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
}

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;

}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

// var num1 = prompt("Digite o primeiro número:");
// var num2 = prompt("Digite o segundo número:");
// // function somar(a, b){
// //     let resultado = (num1(a) + num2(b));
// //     return(resultado);
// // }
// // console.log(resultado);

function somar(a, b){
    return(a+b);
}
function subtrair(a, b){
    return(a-b);
}
function multiplicar(a, b){
    return(a*b);
}
function dividir(a, b){
    return(a/b);
}

console.log("Somando ", somar(10, 5));
console.log("Subtraindo ", subtrair(50, 5));
console.log("Multiplicando ", multiplicar(10, 3));
console.log("Dividindo ", dividir(10, 2));
