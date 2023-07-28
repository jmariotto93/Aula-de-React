import React from "react";

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 4000'},
    ],
    ativa: true
}

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        {nome: 'Notebook', preco: 'R$ 3500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 4000'},
        {nome: 'Guitarra', preco: 'R$ 2800'},
    ],
    ativa: false
}

const ativa = {
    color: "green",
}
const inativo = {
    color: "red",
}

const App = () => {
   const dados = luana; // const dados = mario;

   const total = dados.compras.map((item) => 
   Number(+item.preco.replace('R$', '')),
   ).reduce((a, b) => a + b);

   console.log(total)

    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>
            Situação:{' '} 
            <span style={{ color: dados.ativa ? 'green' : 'red'}} > 
            {dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
            <p>Total: R${total}</p>
            {total >= 10000 && <p>'Você está gastando muito!'</p>}

        </div>
    )
}

export default App