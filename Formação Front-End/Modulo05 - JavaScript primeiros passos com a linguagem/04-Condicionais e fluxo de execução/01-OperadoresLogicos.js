console.log("\nTrabalhando com Condicionais");
const listCidades = new Array(`Salvador`, `São Paulo`, `Adamantina`); // declarando e add cidades.

const idadeComprador = 15;
const estaAcompanhado = true;

if (idadeComprador < 18 && !estaAcompanhado) {
    console.log("\n\n-->Menores de idade não podem comprar passagem!!");
} else {
    if(estaAcompanhado)
        console.log("\n-->Menor acompanhado!!");

    console.log("\n-->Compra para " + listCidades[1] + " efetuada com sucesso!");
    listCidades.splice(1,1); // remove o elemento da lista pela posição informado e quantidade após essa posiçao.
}

console.log("\n\n-->Passagens ainda disponiveis para : " + listCidades);
