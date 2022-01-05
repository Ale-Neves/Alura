//Criando uma classe cliente.
class Cliente {
    nome;
    rg;
    cpf;
    endereco;
    cidade;
}

class ContaCorrente{
    _saldo;
    agencia;

    sacar(valor)
    {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`\n--> Operação de Saque Realizada com Sucesso!`)
        }
    }

    depositar(valor)
    {
        if(valor > 0)
        {
            this._saldo += valor;
            console.log(`\n--> Operação de Deposito Realizada com Sucesso!`)
        }
    }

    extrato()
    {
        console.log(`\n------- Extrato ---------`);
        console.log(`-> valor em conta: ${this._saldo}`);
        console.log(`-> agencia: ${this.agencia}`);
        console.log(`---------------------------`);
    }
}

//instanciando o objeto cliente.
const cliente1 = new Cliente();

// atribuindo valores as variaveis do objeto. 
cliente1.nome       = "Alexandre Neves";
cliente1.rg         = "112354556";
cliente1.cpf        = "31354451351";
cliente1.endereco   = "Rua clodovil, 451 ";
cliente1.cidade     = "Adamantina";

const contaCorrent1 = new ContaCorrente();
contaCorrent1.agencia = "0011";

console.log(`\n\n|--- Conta Corrente do Cliente: ${cliente1.nome} ---|`);
const valorSaque = 50.00;
const valorDeposito = 10.00;
console.log(`\n--> Operação de Saque no valor de R$${valorSaque}`)
contaCorrent1.sacar(valorSaque);
console.log(`\n--> Operação de Deposito no valor de R$${valorDeposito}`)
contaCorrent1.depositar(valorDeposito);
contaCorrent1.extrato();

const cliente2 = new Cliente();
cliente2.nome       = "Vinicius Mesquini";
cliente2.rg         = "121515115";
cliente2.cpf        = "42446551156";
cliente2.endereco   = "Rua cabral, 142 ";
cliente2.cidade     = "Tupi";

//console.log(cliente1, cliente2);