import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import React, {useState} from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntraga";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validacoes}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  const formularios = [
    <DadosUsuario aoEnviar={colotaDados}/>,
    <DadosPessoais aoEnviar={colotaDados}/>,
    <DadosEntrega aoEnviar={colotaDados}/>,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  useEffect(()=>{
    if(etapaAtual === formularios.length-1)
      aoEnviar(dadosColetados);
  })

  function colotaDados(dados){
    setDados({...dadosColetados, ...dados})
    proximaEtapa();
  }

  function proximaEtapa(){
    setEtapaAtual(etapaAtual+1);
  }


  
  return<>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]}
  </>
}

export default FormularioCadastro;
