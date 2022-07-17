// console.log("Hello World!"); // O console aceita parametros para exibir em log
// console.log("Thiago" + 30 + "anos"); // È possível concatenar texto e variveis igual ao Java
// console.log("Thiago", 30, "anos"); // O console aceita infinitos parametros basta separar por vírgula

// let nome = "Thiago"; // let cria uma variável com escopo limitado
// var sobrenome = "Souza"; // var cria uma variável que continua existindo mesmo depois do escopo

// console.log(nome);
// console.log("Meu nome é " + nome);
// console.log("Meu nome é", nome);
// console.log("Meu nome é " + nome + ' e o sobre nome: "sobrenome"');
// console.log('Meu nome é ' + nome + ' e o sobre nome: \'sobrenome\'');
// console.log(`Meu nome é ${nome}`);

// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = "";
// console.log("No momento nome é do tipo " + typeof (nome));

// let idade = 24;
// let altura = 1.75;
// console.log(`A variável idade é do tipo ${typeof (idade)} e a variável altura é do tipo ${typeof (altura)}`);

// // Esta parte foi comentada para não atrapalhar no restante da aula
// // let mensagem = prompt("O que você está pensando");
// // let interromper = prompt("Estou interrompendo");
// // console.log("Você está pensando " + mensagem);
// // console.log("A informação capturada é do tipo " + typeof (mensagem));

// console.log("Os operadores aritmeticos são os mesmos do Java +,-,*,/,%");
// console.log("Somando " + (1 + 2));
// console.log("Subtraindo " + (5 - 1));
// console.log("Multiplicando " + (3 * 2));
// console.log("Dividindo " + (10 / 2));

// if (idade < 18) {
//     console.log("É menor de idade");
// } else {
//     console.log("É maior de idade");
// }

// if (altura < 1.5) {
//     console.log("Baixinho");
// } else if (altura < 1.7) {
//     console.log("Altura mediana");
// } else if (altura < 1.9) {
//     console.log("É alto");
// } else {
//     console.log("Gigante");
// }

// // Operador ternário
// let resposta = (altura < 2 ? "Altura normal" : "Gigante");

// switch (idade) {
//     case 1:
//         console.log("Um aninho");
//         break;
//     case 2:
//         console.log("Dois aninhos");
//         break;
//     case 3:
//         console.log("Três aninhos");
//         break;
//     default:
//         console.log("Chega!");
//         break;
// }

let variavelNome = prompt("Digite seu nome:");
console.log("Seu nome é: "+variavelNome);

let variavelIdade = prompt("Digite sua idade:");
console.log("Sua idade é: "+variavelIdade);

let variavelSexo = prompt("Digite seu sexo:");
console.log("Sexo: "+variavelSexo);

let variavelCidade = prompt("Digite sua cidade:");
console.log("Cidade: "+variavelCidade);

console.log("Bem vindo "+ variavelNome+", você é de " +variavelCidade+ "e tem " +variavelIdade+ " anos de idade."); 