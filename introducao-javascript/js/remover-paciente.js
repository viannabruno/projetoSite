var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  // var alvoEvent = event.target;
  // var paiDoAlvo = alvoEvent.parentNode;
  //
  // paiDoAlvo.remove();
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);
  //event.target.parentNode.remove();
  console.log("Duplo Clicado");
});

// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     console.log("Fui clicado com um duplo Click");
//     this.remove();
//   });
// });
