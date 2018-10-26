var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");
  //Extraindo informacoes do paciente do form
  var paciente = obterInformacaoForm(form);

  //var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros);
  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    console.log("Paciente invalido");
    return;
  }

  //adicionando o paciente na tabela.
  //var tabela = document.querySelector("#tabela-pacientes");

  //tabela.appendChild(pacienteTr);
  adicionaPacientesNaTabela(paciente);

  form.reset();
  var menssagensErro = document.querySelector("#mensagem-erro");
  menssagensErro.innerHTML = "";

  console.log("Cliquei no botao");
});

function adicionaPacientesNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}

function obterInformacaoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura:  form.altura.value,
    gordura:  form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){

  var erros = [];

  if( paciente.nome.length == 0){
    erros.push("Nome não pode ser em branco");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso invalido");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura invalida");
  }

  if( paciente.gordura.length == 0){
    erros.push("Gordura nao pode ser em branco");
  }

  if( paciente.peso.length == 0){
    erros.push("Peso nao pode ser em branco");
  }
  if( paciente.altura.length == 0){
    erros.push("Altura nao pode ser em branco");
  }

  return erros;
}
