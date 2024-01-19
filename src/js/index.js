const botaoVoltarAoTopo = document.querySelector(".voltar-ao-topo");
const dispositivos = document.querySelector(".btn-plataforma .lista-de-dispositivos");
const botao = document.querySelector(".btn-plataforma");

botao.addEventListener("click", () => {
	dispositivos.classList.toggle("ativo");
});
