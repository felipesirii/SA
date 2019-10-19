function carregarDados() {
    const pais = 'Brasil';
    document.getElementById('nome_pais').value = pais;
    }
    
//Contrutor para Estado
function Estado(nome, pais) {
    this.nome = nome;
    this.pais = pais;
    }
    
    
function salvarEstado() {
    //Pegar o elemento HTML com id "nome e guardar em input
let input = document.getElementById('nome_estado');
    //Pegar o valor de dentro de input, ou seja, o que o usuário digitou//
    //e guardar em nome (variável)//
let nome = input.value;
    //Salvar o nome digitado no storage com chave 'nome' 
input = document.getElementById('nome_pais');
//let pais = input.value;
    //Usa o construtor Estado para criar o objeto estado
let estado = new Estado(nome, pais);
    //console.log(estado);
    //let estadoStr = JSON.stringify(estado);
    //console.log(estadoStr);

let estadoStr = JSON.stringify(estado);
   // console.log(estadoStr);    
// Traz da página o no me do país   
localStorage.setItem('estado', estadoStr);
}

function salvarCliente(nome) {
    this.nome = nome;

    let input = document.getElementById('nome_cliente');
    let nome = input.value;
    let nomestr = JSON.stringify(nome);
    localStorage.setItem('nome', nomestr);


let input = cpf1 (number)
    this.number = number
    let input = document.getElementById('cpf');
    let number = input.value;
    let cpfs = JSON.stringify(number);
    localStorage.setItem('number', cpfs);
}

function salvarCliente() {
  
    let input = document.getElementById('nome_cliente');
    let nome = input.value;
    
    let input = document.getElementById('cpf');
    let cpf = input.value;

    let input = document.getElementById('cnpj');
    let cnpj = input.value;

    let input = document.getElementById('cep');
    let cep = input.value;

    let input = document.getElementById('nome_cidade');
    let cidade = input.value;

    let input = document.getElementById('nome_bairro');
    let bairro = input.value;

    let input = document.getElementById('nome_rua');
    let rua = input.value;

    let input = document.getElementById('num');
    let numero = input.value;

    let input = document.getElementById('cel');
    let celular = input.value;

    let cliente = new Cliente(nome, cpf, cnpj, cep, cidade,
        bairro, rua, numero, celular);

    let listEstadoStr = localStorage.getItem('listaEstado');
    let listEstado = [];
    if (listEstadoStr != null) {
        listEstado = JSON.parse(listEstadoStr);
    }

}
