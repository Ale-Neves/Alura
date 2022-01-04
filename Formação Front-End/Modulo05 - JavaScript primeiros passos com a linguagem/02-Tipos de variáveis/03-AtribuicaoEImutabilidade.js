 //Jeito de que não deve se declarar variaveis.
 Mes = "Janeiro";
 // ou
 mes = "Janeiro";
 //--------------------------------------------/ 

 // CONST = significa constantes, algo que não pode mudar. 
 // LET = significa variação, algo que pode ser variado. 

 console.log("\nAtribuição de Variaveis");
 const idade = 23;
 const nome = "Alexandre";
 const sobreNome = "Neves";
 let NomeESobreNome = "";
 
 // nome = "paulo"; (nao pode ser atribuido pois é uma constante).

 console.log(nome, sobreNome); // concatenação.
 // ou
 console.log(nome + " " + sobreNome); // concatenação.

 console.log(`Meu nome é ${nome} ${sobreNome}`); // interpolação.

 NomeESobreNome = nome + " " + sobreNome;
 console.log(NomeESobreNome);
