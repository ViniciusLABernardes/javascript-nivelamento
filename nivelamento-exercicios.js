const nome = "vinicius";
let idade = 21;
let aprovado = true;
let notas = [7,9,10];
let usuario = {
    email:"vini@email.com",
    senha:"vini123"
}
console.log(nome,idade,aprovado,notas,usuario)
// null = valor nulo é dado a uma variavel para indicar que ela esta vazia ou ainda sem valor valido
//undefined = valor que ainda não foi indefinido, variavel qual foi declarada mas n foi atribuido nenhum valor

let valorNulo = null;
let valorIndefinido;

if(valorNulo == null || undefined & valorIndefinido == undefined || null){
    console.log(valorIndefinido,valorNulo);
}

let numero = -2

if(numero > 0){
    console.log("positivo")
}else if(numero < 0){
    console.log("negativo")
}else if(numero == 0){
    console.log("zero")
}

for(n = 1; n<11; n++){
    console.log(n)
}
let contador = 1
let soma = 0
console.log("------while--------")
while(contador <= 5){
        soma += contador
        contador ++     
}
console.log(soma)

let opcoes = "A";
switch(opcoes){
    case "A": console.log("Opção A selecionada");
    break;
    case "B": console.log("Opção B selecionada");
    break;
    case "C": console.log("Opção C selecionada");
    break;
    default: console.log("Opção invalida");
    break;
}
opcoes
    