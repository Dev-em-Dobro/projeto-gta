const botaoVoltarAoTopo = document.querySelector('.voltar-ao-topo');
const botoesPlataforma = document.querySelectorAll('.btn-plataforma');
const listaDeInformacoes = document.querySelectorAll('.informacoes.ativo');
const listaDeJogos = document.querySelectorAll('.btn-plataforma > .lista-de-jogos');

console.log(listaDeInformacoes);

botoesPlataforma.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        listaDeJogos[index].classList.toggle('ativo');
        listaDeInformacoes[index].classList.toggle('ativo');
    })
});

function mostrarBotaoVoltarAoTopo(){
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botaoVoltarAoTopo.classList.add('mostrar');
        } else {
            botaoVoltarAoTopo.classList.remove('mostrar');
        }
    }

    botaoVoltarAoTopo.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

mostrarBotaoVoltarAoTopo()