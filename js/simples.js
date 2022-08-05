//$.ajax()

// $.ajax(
//    {

//     }
// )

//$.ajax() // jQuery usando Ajax

// $.ajax(
//     { // configuração da chamada

//     }
// )
// $.ajax(
//     { // configuração da chamada
//        url:"aqui coloque a sua URL + variaveis",
//        type:"aqui o tipo da chama  GET , POST , PUT , DELETE , PATH",
//        success:function(variavel_de_retorno){
//         //use a variavel de retorno se der certo
//        },
//        error: function(variavel_de_retorno_ruim){
//         //use a variavel de retorno ruim para tentar acertar na proxima
//         // ou saber oq motivou o erro
//        }
//     }
// )

$("#meu_ip").on("click", function () {

    $.ajax({
        url: "https://httpbin.org/ip",
        type: "get",
        success: function (retorno) {
            console.log("Opa funcionou", retorno)
        },
        error: function (motivo) {
            console.warn("Deu ruim", motivo);
        },

    });
})

$("#eco_get").on("click", function () {

    $.ajax({
        url: encodeURI("https://httpbin.org/get?nome=thiago souza&idade=31&cidade=fpolis"),
        type: "get",
        success: function (retorno) {
            console.log("Deu certo", retorno.args);
        },
        error: function (errouuu) {
            console.warn("ERROU", errouuu);
        },
    });
});

$("#delay_get").on("click", () => {
    let numero = $("#tempo").val()

    $.ajax({
        url: encodeURI("https://httpbin.org/delay/" + numero),
        type: "get",
        success: (retorno) => {
            console.log("Demorou + deu certo", retorno);
        },
        error: (errouuu) => {
            console.warn("Erro chega rápido como sempre", errouuu);
        },
    });
});


$("#eco_post").on("click", () => {
    let objeto = {
        nome: $("#nome").val(),
        idade: $("#idade").val(),
    };
    console.log("Esse é o objeto", objeto);

    $.ajax({

        url: "https://httpbin.org/post",
        type: "post",
        headers: {
            "Accept": "application/json",
            'Content-type': 'application/json',
        },
        data: JSON.stringify(objeto),//converte objeto em string
        success: function (dados) {
            console.log("Deu certo o/!", dados)
        },
        error: function (erro) {
            console.error("Errouu...", erro)
        }
    });
});

$("#busca_pokemon").on("click",()=>{

    console.log("Iniciando busca...");
    let chave= $("#pokemon").val()
    console.log("Iremos buscar por ",chave);

    $.ajax(
        {
            url:encodeURI("https://pokeapi.co/api/v2/pokemon/"+chave),
            type:"get",
            success:(retorno)=>{
                console.log("Quem é esse pokemon?",retorno);
                $("body").append(
                    $("<div>",{class:"row"}).append(
                        $("<div>",{class:"col-1",text:retorno.id}),
                        $("<div>",{class:"col-3",text:retorno.name}),
                        
                    )
                )

                setTimeout(function(){

                    $("body").append(
                    $("<div>",{class:"col"}).append(
                        $("<img>",{src:retorno.sprites.front_default})
                    ),
                    $("<div>",{class:"col"}).append(
                        $("<img>",{src:retorno.sprites.back_default})
                    )
                    )

                },3000)
            },
            error:(opa)=>{
                console.warn("Opa oq aconteceu ?",opa);
            }
        }
    )

})


// objeto a ser enviado no body
// var objeto = {
//     nome: "Thiago",
//     email: "email@email.com"
// };

// $.ajax({

//     url: "https://httpbin.org/post/",
//     type: "post",
//     headers: {
//         "Accept": "application/json",
//         'Content-type': 'application/json',
//     },
//     data: JSON.stringify(objeto),//converte objeto em string

//     success: function (dados) {
//         console.log(dados)
//     },
//     error: function (erro) {
//         console.error(erro)

//     }

// })

