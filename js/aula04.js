console.group("Ler conteúdos com jQuery");

console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());

console.groupEnd();

console.group("Alterar contudos com jQuery");
$("#paragrafo_2").text("Conteudo escrito com jQuery");
console.log($("#paragrafo_2").text());
console.groupEnd();

console.group("Ler varios conteudos com jQuery");
let lista = $("p");
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent)
});
console.groupEnd();

console.group("Escrever vários conteúdos com jQuery");
$("li").text("li escrito com jQuery");
console.groupEnd();

console.group("Criar elementos com jQuery");
$("<button>", {
    text: "Click Aqui",
    class: "btn btn-primary"
}).appendTo("body");

$("body").append(
    $("<b>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto texto, texto" }),
)

console.groupEnd()

console.group('Mais de um item com jQuery');

console.groupEnd();

console.group('More itens jQuery')

$("<u>").append(
    $("<li>", {
        text: "item um"
    }),
    $("<li>", {
        text: "item dois"
    }),
    $("<li>", {
        text: "item tres"
    }),
).appendTo("body")

console.groupEnd()

console.group('Exercicio escrever mais de um item com jQuery');
// One table
// thead
//th
//th
//th

//tbody
//tr
//td
//td
//td
//tr
//td
//td
//td
console.groupEnd();


console.group('Exercicio escrever mais de um item com jQuery')
$("<table>", {class:"table table-dark"}).append(
    $("<thead>", {class:"bg-dark"}).append(
        $("<th>", { text: "Nome" }),
        $("<th>", { text: "Idade" }),
        $("<th>", { text: "Cidade" }),
    ),
    $("<tbody>").append(
        $("<tr>").append(
            $("<td>", { text: "Fulano" }),
            $("<td>", { text: "33" }),
            $("<td>", { text: "Blumenal" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Zé" }),
            $("<td>", { text: "80" }),
            $("<td>", { text: "Florianópolis" }),
        )
    )
).appendTo("body")

console.groupEnd()


console.group('Eventos de click em qualquer lugar')

$("p").on("click", function(){
    alert("Opa")
})

$("li").on("click", function(){
    console.warn("Opa")
})

$("#ok").on("click", function(){
    alert("Tudo OK")
})

console.groupEnd()



console.group('');

//exercicio
//No html ter um button com id=add
//no JS ter um evento de clique para quem tenha o id add
//nesse evento deve ser inserido no HTML um novo P com class alert alert-danger
//depois
//ter outro button no HTML com o id limpar
//e no JS um evento de clique para quem tem o id = limpar
//para remover todos os elementos com class alert
//$(".alert").remove()

$("#add").on("click", function(){
    $("<p>", {text: "Adicionando Auuuur...", class: "alert alert-danger" }).appendTo("#paragrafo_1")
})

$("#clean").on("click", function(){
    $(".alert").remove()
})


console.groupEnd();

