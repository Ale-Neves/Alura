import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(valorInicial, cliente, agencia)
    {
        super(valorInicial, cliente, agencia);
    }
}