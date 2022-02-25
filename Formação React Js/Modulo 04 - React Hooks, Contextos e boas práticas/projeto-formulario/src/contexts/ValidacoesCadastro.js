import React from 'react';

const ValidacoesCadastro = React.createContext({
    cpf: valorDefult,
    senha: valorDefult,
    nome: valorDefult,
});

function valorDefult(){
    return {valido: true, texto: ""};
}

export default ValidacoesCadastro;

