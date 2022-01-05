import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";


//----------------ADD CLIENTES----------------------//
const cliente1 = new Cliente("Alexandre Neves","112354556","31354451351","Rua clodovil, 451 ","Adamantina");
const cliente2 = new Cliente("Vinicius Mesquini","121515115","42446551156","Rua cabral, 142 ","Tupi");
//----------------------------------------------------//

const contaCorrent1 = new ContaCorrente("2155", cliente1);
const contaCorrent2 = new ContaCorrente("1542", cliente2);

console.log(contaCorrent1);
