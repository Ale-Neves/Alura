import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";


//----------------ADD CLIENTES----------------------//
const cliente1 = new Cliente();
cliente1.nome       = "Alexandre Neves";
cliente1.rg         = "112354556";
cliente1.cpf        = "31354451351";
cliente1.endereco   = "Rua clodovil, 451 ";
cliente1.cidade     = "Adamantina";

const cliente2 = new Cliente();
cliente2.nome       = "Vinicius Mesquini";
cliente2.rg         = "121515115";
cliente2.cpf        = "42446551156";
cliente2.endereco   = "Rua cabral, 142 ";
cliente2.cidade     = "Tupi";
//----------------------------------------------------//

const contaCorrent1 = new ContaCorrente();
contaCorrent1.agencia = "2155";
contaCorrent1.cliente = cliente1;
contaCorrent1.depositar(100);

/*const contaCorrent2 = new ContaCorrente();
contaCorrent2.agencia = "0011";
contaCorrent2.cliente = cliente2;

contaCorrent1.transferir(50, contaCorrent2);*/

console.log(contaCorrent1._saldo);

/*
console.log(`\n\n|--- Conta Corrente do Cliente: ${cliente1.nome} ---|`);
const valorSaque = 50.00;
const valorDeposito = 10.00;
console.log(`\n--> Operação de Saque no valor de R$${valorSaque}`)
contaCorrent1.sacar(valorSaque);
console.log(`\n--> Operação de Deposito no valor de R$${valorDeposito}`)
contaCorrent1.depositar(valorDeposito);
contaCorrent1.extrato();



//console.log(cliente1, cliente2);*/