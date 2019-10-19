function Estado(nome, pais) {
    this.nome = nome;
    this.pais = pais;
    }
    
function salvarEstado() {
  
    let input = document.getElementById('nome_estado');
   
    let nome = input.value;
    
    input = document.getElementById('nome_pais');
    let pais = input.value;

    let estado = new Estado(nome, pais);

    let listEstadoStr = localStorage.getItem('listaEstado');
    let listEstado = [];
    if (listEstadoStr != null) {
        listEstado = JSON.parse(listEstadoStr);
    }

    listEstado.push(estado);

    listEstadoStr = JSON.stringify(listEstado);

    localStorage.setItem('listaEstado', listEstadoStr);
}

function carregarDados () {
    let listEstadoStr = localStorage.getItem('listaEstado');
    let listaEstados = [];
    if (listaEstadosStr != null) {
        listaEstados = JSON.parse(listaEstadosStr);
    }
    let comboEstado = document.getElementById("comboEstado");
    let option;
    for (let index = 0; index < listaEstados.length;index++){
        option.text = listaEstados[index].nome;
        option.value = listaEstados[index].nome;
        comboEstado.add(option);
    }    
}


function salvarCidade() {

    let input = document.getElementById('nome_cidade');
    let nome = input.value;
    
    let select = document.getElementById('comboEstado');
    let estado = select.value;

    let cidade = new cidade(nome, estado)

    let cidadeStr = JSON.stringify(cidade) 
    localStorage.setItem('Cidade', cidadeStr);
}