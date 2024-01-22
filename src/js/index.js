const botaoVoltarAoTopo = document.querySelector(".voltar-ao-topo");
const plataformas = document.querySelector(".btn-plataforma .plataformas");
const botao = document.querySelector(".btn-plataforma");

botao.addEventListener("click", () => {
	plataformas.classList.toggle("ativo");
});
