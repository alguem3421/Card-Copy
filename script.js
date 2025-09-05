// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const modalBg = document.getElementById("modalBg");
  const modalWhy = document.getElementById("modalWhy");
  const btnClose = document.getElementById("btnClose");
  const btnReset = document.getElementById("btnReset");
  const btnWhy = document.getElementById("btnWhy");
  const btnWhyClose = document.getElementById("btnWhyClose");
  const btnReport = document.getElementById("btnReport");
  const toggleAttacker = document.getElementById("toggleAttacker");
  const fillDemo = document.getElementById("fillDemo");

  // Impede envio real do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!document.getElementById("consent").checked) {
      alert("Confirme que entendeu que é apenas uma simulação.");
      return;
    }
    modalBg.style.display = "flex";
  });

  // Botão fechar modal principal
  btnClose.addEventListener("click", () => {
    modalBg.style.display = "none";
  });

  // Reinicia simulação
  btnReset.addEventListener("click", () => {
    modalBg.style.display = "none";
    form.reset();
  });

  // Mostrar/ocultar explicação de URL suspeita
  btnWhy.addEventListener("click", () => {
    modalWhy.style.display = "flex";
  });
  btnWhyClose.addEventListener("click", () => {
    modalWhy.style.display = "none";
  });

  // Simulação de denúncia
  btnReport.addEventListener("click", () => {
    alert("Você pode denunciar sites suspeitos ao banco e em: https://www.gov.br/pt-br/servicos/denunciar-sites-falsos");
  });

  // Alterna entre visão vítima x educativa
  toggleAttacker.addEventListener("change", () => {
    document.querySelectorAll(".hide-on-attacker").forEach(el => {
      el.style.display = toggleAttacker.checked ? "none" : "";
    });
  });

  // Preencher com dados fictícios
  fillDemo.addEventListener("click", () => {
    document.getElementById("cardNumber").value = "4111 1111 1111 1111";
    document.getElementById("cardName").value = "JOAO DA SILVA";
    document.getElementById("exp").value = "12/29";
    document.getElementById("cvv").value = "123";
    document.getElementById("pin").value = "000000";
  });
});
