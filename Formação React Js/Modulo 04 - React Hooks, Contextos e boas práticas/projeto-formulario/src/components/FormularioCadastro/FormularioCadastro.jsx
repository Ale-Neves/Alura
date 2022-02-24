import React from "react";
import DadosEntrega from "./DadosEntraga";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validaCPF}) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validaCPF={validaCPF}/>
      <DadosUsuario/>
      <DadosEntrega/>
    </>
  );
}
export default FormularioCadastro;
