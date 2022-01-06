export class Conta{

    constructor(valorInicial, cliente, agencia)
    {
        if(this.constructor == Conta)
            throw new Error("Não é permitido efetuar uma instancia do tipo Conta!");

        this._saldo = valorInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(){
        throw new Error("Este metodo Sacar da Conta é abstrato!");
    }

    _sacar(valor, taxa){
        let valorSacar = valor * taxa;
        if(this._saldo >= valorSacar){
            this._saldo -= valorSacar;
            return valorSacar;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}