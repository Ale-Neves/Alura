import React, {useState, useContext} from "react";
import {Button,TextField, Switch, FormControlLabel } from "@material-ui/core/";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}) {

    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar())
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }}>
            
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                variant="outlined"
                id="nome"
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                name="nome"
                label="Nome"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }} 
                variant="outlined" 
                fullWidth
                id="sobrenome"
                name="sobrenome" 
                label="Sobrenome" 
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}  
                variant="outlined" 
                id="cpf" 
                label="CPF"
                onBlur={validarCampos}
                name="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                fullWidth 
                margin="normal"
            />

            <FormControlLabel
                control={
                    <Switch
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes" 
                        checked={promocoes}
                        color="primary"
                    />
                } 
                label="Promoções"
            />

            <FormControlLabel 
                control={
                    <Switch
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }} 
                        name="novidades" 
                        checked={novidades}
                        color="primary"
                    />
                } 
                label="Novidades" 
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;