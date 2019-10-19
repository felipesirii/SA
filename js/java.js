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

function Cliente(nome, cpf, cnpj, cep, cidade, bairro, rua, numero,
    celular, telefone, email){
        this.nome = nome;
        this.cpf =  cpf;
        this.cnpj = cnpj;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.celular = celular;
        this.telefone = telefone;
        this.email = email;
    }

function salvarCliente() {
  
    let input = document.getElementById('nome_cliente');
    let nome = input.value;
    
    input = document.getElementById('cpf');
    let cpf = input.value;

    input = document.getElementById('cnpj');
    let cnpj = input.value;

    input = document.getElementById('cep');
    let cep = input.value;

    input = document.getElementById('nome_cidade');
    let cidade = input.value;

    input = document.getElementById('nome_bairro');
    let bairro = input.value;

    input = document.getElementById('nome_rua');
    let rua = input.value;

    input = document.getElementById('num');
    let numero = input.value;

    input = document.getElementById('cel');
    let celular = input.value;

    input = document.getElementById('telefone');
    let telefone = input.value;

    input = document.getElementById('email');
    let email = input.value;


    let cliente = new Cliente(nome, cpf, cnpj, cep, cidade,
        bairro, rua, numero, celular,telefone, email);

    let listClientestr = localStorage.getItem('listaCliente');
    let listCliente = [];
    if (listClientestr != null) {
        listCliente = JSON.parse(listClientestr);
    }

    listCliente.push(cliente);

    listClientestr = JSON.stringify(listCliente);

    localStorage.setItem('listaCliente', listClientestr);
}

