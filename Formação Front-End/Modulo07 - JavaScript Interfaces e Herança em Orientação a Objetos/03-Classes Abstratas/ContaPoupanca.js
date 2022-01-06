import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(valorInicial, cliente, agencia)
    {
        super(valorInicial, cliente, agencia);
    }

    sacar(valor)
    {
        let taxa = 1.2;
        return this._sacar(valor, taxa);
    }
}