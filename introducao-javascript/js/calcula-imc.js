//console.log("Fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
//console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";
//alert("bom dia");

//codigo para os pacientes Calculo do IMC
var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
  console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdNome = paciente.querySelector(".info-nome");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdGordura = paciente.querySelector(".info-gordura");

  var nome = tdNome.textContent;
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var gordura = tdGordura.textContent;

  var pesoValido = validaPeso(peso);
  var alturaValida =  validaAltura(altura);

  var tdImc = paciente.querySelector(".info-imc");

  if(!pesoValido){
    console.log("Peso invalido");
    pesoValido = false;
    tdImc.textContent = "Peso Invalido";
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaValida){
    console.log("Altura Invalida");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
    paciente.classList.add("paciente-invalido");
  }

  if(alturaValida && pesoValido){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e Peso Invalidos";
  }

}

titulo.addEventListener("click", function (){
  console.log("posso chamar uma função anonima")
});

//FUNÇÔES

function validaPeso(peso){
  if(peso >= 0 && peso <= 1000){
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.00){
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

//function mostraMensagem(){
//    console.log("Ola eu fui clicado!");
//}



//console.log(paciente);// tr
//console.log(nome);// nome
//console.log(peso);// abter peso
//console.log(altura);//obter altura
//console.log(imc);// obter IMC
