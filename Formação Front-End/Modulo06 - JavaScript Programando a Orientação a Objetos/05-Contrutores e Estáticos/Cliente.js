import { ContaCorrente } from "../04-Acessando Atributos Privados copy/ContaCorrente";

//Criando uma classe cliente.
export class Cliente {
    nome;
    _rg;
    _cpf;
    endereco;
    cidade;

    get cpf()
    {
        return this._cpf;
    }

    get nome()
    {
        return this.nome;
    }

    get rg()
    {
        return this._rg;
    }

    get endereco()
    {
        return this.endereco;
    }

    get cidade()
    {
        return this.cidade;
    }


    constructor(nome,rg,cpf,endereco,cidade)
    {
        this.nome = nome;
        this._rg = rg;
        this._cpf = cpf;
        this.endereco = endereco;
        this.cidade = cidade;
    }
}

