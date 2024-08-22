var usuario = {
    nome: "Igor",
    idade: 17,
    uf: "SP"
}

if (usuario.idade < 18 && usuario.uf == "SP"){
    console.log("Usuário adolescente de São Paulo.");
} else if (usuario.idade < 60 && usuario.uf == "RJ"){
    console.log("Usuário adulto.");
} else{
    console.log("Usuário idoso.");
}

var mes = "Feb";

switch (mes) {
    case "Jan" :
        console.log("Janeiro");
        break;
    case"Mar":
        console.log("Março");
        break;
    default:
        console.log("Outro mês");
    break;
}


    const salario = 2000;
    let salarioFinal;
    var nome = "Igor";
    var cargo = "vendedor";
    
    switch(cargo) {
    case 'gerente':
    salarioFinal = salario * 2;
    console.log(nome +" ganha " + salarioFinal + " reais.")
    break;
    case 'fiscal':
    salarioFinal = salario * 1.5;
    console.log(nome +" ganha " + salarioFinal + " reais.")
    break;
    case 'vendedor':
    salarioFinal = salario * 1.1;
    console.log(nome +" ganha " + salarioFinal + " reais.")
    break;
    default:
    console.log('Cargo inválido');
    return;
    }