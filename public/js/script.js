var pessoa = {
    cpf: "ADM",
    senha: "123"
};

$("#formLogin").on("submit", function(){
    console.log("submit");
    loginSubmit();
});

$("#cpf").on("blur", function(){
    var cpf = $("#cpf");
    if (cpf == 3); {
        loginSubmit();
    }
});

function loginSubmit(){
    var cpf = $("#cpf").val();
    var senha = $("#senha").val();

    if (cpf == pessoa.cpf && senha == pessoa.senha)
    {
        $(".form-messages").text("Sucesso!").css("color", "green");
    } 
    else 
    {
        $(".form-messages").text("Erro!").css("color", "red");
    }
};