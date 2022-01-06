import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


console.clear();

const cliente1 = new Cliente("Ricardo", 11122233309);


const contaCorrente = new Conta(0, cliente1,1025);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new Conta(100,cliente1,1025);

console.log(contaPoupanca);
console.log(contaCorrente);







console.log("\n\n................................................."
+ "...............................................................");