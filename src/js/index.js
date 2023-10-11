const form = document.getElementById("formulario");
const inputs = [
  document.getElementById("nomeid"),
  document.getElementById("emailid"),
  document.getElementById("foneid"),
  document.getElementById("mensagemid")
];

function toggleCampoValidacao(campo, erro) {
  campo.classList.toggle("campo-verde", !erro);
  campo.classList.toggle("campo-vermelho", erro);
}

function adicionarMensagemErro(campo) {
  const mensagemErro = document.createElement("p");
  mensagemErro.textContent = "Campo obrigatório";
  mensagemErro.style.fontSize = "8px";
  mensagemErro.style.marginLeft = "21px";
  mensagemErro.style.position = "absolute";
  mensagemErro.style.color = "red";
  mensagemErro.classList.add("mensagem-erro");
  campo.parentNode.insertBefore(mensagemErro, campo.nextSibling);
}

function removerMensagemErro(campo) {
  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  if (mensagemErro) {
    campo.parentNode.removeChild(mensagemErro);
  }
}

function validarCampo(event) {
  const campo = event.target;
  const erro = campo.value.trim() === "";
  toggleCampoValidacao(campo, erro);

  if (erro) {
    if (!campo.parentNode.querySelector(".mensagem-erro")) {
      adicionarMensagemErro(campo);
    }
  } else {
    removerMensagemErro(campo);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let algumErro = false;
  inputs.forEach((campo) => {
    const erro = campo.value.trim() === "";
    toggleCampoValidacao(campo, erro);
    if (erro) {
      algumErro = true;
      if (!campo.parentNode.querySelector(".mensagem-erro")) {
        adicionarMensagemErro(campo);
      }
    }
  });
});

inputs.forEach((campo) => {
  campo.addEventListener("input", validarCampo);
});
