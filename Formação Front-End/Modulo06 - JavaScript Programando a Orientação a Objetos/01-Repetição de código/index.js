//Criando uma classe cliente.
class Cliente {
    nome;
    rg;
    cpf;
    endereco;
    cidade;
}

//instanciando o objeto cliente.
const cliente1 = new Cliente();

// atribuindo valores as variaveis do objeto. 
cliente1.nome       = "Alexandre Neves";
cliente1.rg         = "112354556";
cliente1.cpf        = "31354451351";
cliente1.endereco   = "Rua clodovil, 451 ";
cliente1.cidade     = "Adamantina";


const cliente3 = new Cliente();
cliente3.nome       = "Vinicius Mesquini";
cliente3.rg         = "121515115";
cliente3.cpf        = "42446551156";
cliente3.endereco   = "Rua cabral, 142 ";
cliente3.cidade     = "Tupi";

/*//instanciando o objeto cliente e atribuindo valores.
const cliente2 = new Cliente()
{
    nome        = "Vinicius Mesquini",
    rg          = "121515115",
    cpf         = "42446551156",
    endereco    = "Rua cabral, 142 ",
    cidade      = "Tupi"
};*/

console.log(cliente1, cliente3);