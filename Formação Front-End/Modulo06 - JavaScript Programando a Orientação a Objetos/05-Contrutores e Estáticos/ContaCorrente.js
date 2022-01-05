import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    _saldo = 0;
    agencia;
    _cliente;

    get agencia()
    {
        return this.agencia;
    }

    get saldo()
    {
        return this._saldo;
    }

    get cliente()
    {
       return this._cliente;
    }

    set cliente(novoValor)
    {
        if (novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    constructor(agencia, cliente)
    {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor)
    {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`\n--> Operação de Saque Realizada com Sucesso!`);
            return valor;
        }
        else{
            return console.log(`\n..... Saldo Insuficiente!`);
        }
    }

    depositar(valor)
    {
        if(valor > 0)
        {
            this._saldo += valor;
            return console.log(`\n..... Operação de Deposito Realizada com Sucesso!`);
        }else
        {
            return console.log(`\n..... Operação de Deposito Invalida!`);
        }
    }

    transferir(valor, conta)
    {
        const sacarConta = this.sacar(valor);
        conta.depositar(sacarConta);
    }

    extrato()
    {
        console.log(`\n------- Extrato ---------`);
        console.log(`-> valor em conta: ${this._saldo}`);
        console.log(`-> agencia: ${this.agencia}`);
        console.log(`---------------------------`);
    }
}