import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

console.clear();

const cliente1 = new Cliente("Ricardo", 11122233309);


const contaCorrente = new ContaCorrente(cliente1,1025);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50,cliente1,1025);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrente);


console.log("\n\n................................................."
+ "...............................................................");