function tocaSom(selectorAudio) {

    const elemento = document.querySelector(selectorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado')
    } else if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//para
for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    tecla.onclick = () => {
        tocaSom(`#som_${instrumento}`);
    };

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}
