 console.log("\nTrabalhando com Listas");
 const listCidades = new Array(`Salvador`, `São Paulo`, `Adamantina`); // declarando e add cidades.

 console.log("\n\n-->Adicionando Curitiba");
 listCidades.push(`Curitiba`); // adicionando uma cidade a lista
 console.log(listCidades);

 console.log("\n\n-->Removendo São Paulo");
 listCidades.splice(1,1); // remove o elemento da lista pela posição informado e quantidade após essa posiçao.
 console.log(listCidades);

 console.log("\n\n-->Exibindo um elemento especifico");
  // exibindo o elemento da lista na posição 1.
 console.log(listCidades[1]);
