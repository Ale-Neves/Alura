import React, {useState} from "react";
import DadosEntrega from "./DadosEntraga";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validaCPF}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuario aoEnviar={proximaEtapa}/>,
    <DadosPessoais aoEnviar={proximaEtapa} validaCPF={validaCPF}/>,
    <DadosEntrega/>
  ];

  function proximaEtapa(){
    setEtapaAtual(etapaAtual+1);
  }
  
  return<>{formularios[etapaAtual]}</>
}

export default FormularioCadastro;
