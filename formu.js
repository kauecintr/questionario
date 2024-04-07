const respostaCorreta = "Estefany Andrade Lima";
const respostaCorreta2 = "Angel Romero";
const respostaCorreta3 = "Bochecha";
const respostaCorreta4 = "Coque";
const respostaCorreta5 = "Livro";
const respostaCorreta6 = "Não";
const respostaCorreta7 = "Todas as alternativas estão corretas";
const respostaCorreta8 = "Estherzinha";
const respostaCorreta9 = "São Paulino";
const respostaCorreta10 = "Com certeza!";
let tentativas = 1;

function conferirNome(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const nomePergunta1 = document.getElementById('nome-correto').value;
    const mensagemAcerto = document.getElementById('mensagem-acerto');

    if (nomePergunta1 === respostaCorreta) {
        mensagemAcerto.classList.remove('hidden');
        setTimeout(function() {
            window.location.href = 'perg2.html';
        }, 2000); // Redireciona para a próxima página após 2 segundos (2000 milissegundos)
    } else {
        alert('Errou!!!');
        tentativas++;
        if (tentativas >= 2) {
           darDica();
        }
    }
}
function darDica() {
    alert('Dica: É uma mulher muito legal que me deixa muito feliz!');
}



function conferirNome2(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const nomePergunta2 = document.getElementById('nome-correto2').value;
    mensagemAcerto = document.getElementById('mensagem-acerto');

    if (nomePergunta2 === respostaCorreta2) {
        mensagemAcerto.classList.remove('hidden');
        setTimeout(function() {
            window.location.href = 'perg3.html';
        }, 2000); // Redireciona para a próxima página após 2 segundos (2000 milissegundos)
    } else {
        alert('Errou!!!');
        tentativas++;
        if (tentativas >= 2) {
           darDica2();
        }
    }
}
function darDica2() {
    alert('Dica: É um bagre paraguaio ai :( ');
}



function conferirResposta3(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta3) {
        alert('Acertou!!!');
        window.location.href = 'perg4.html';
    } else {
        alert('Errou!!!');
    }
}



function conferirResposta4(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta4) {
        alert('Acertou!!!  \u{1F60D} \u{1F60D} \u{1F60D} \u{1F60D}');
        window.location.href = 'perg5.html';
    } else {
        alert('Errou!!!');
    }
}



function conferirResposta5(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta5) {
        alert('Acertou!!!');
        window.location.href = 'perg6.html';
    } else {
        alert('Errou!!!');
    }
}


function conferirResposta6(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');
    mensagemAcerto = document.getElementById('mensagem-acerto');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta6) {
        alert('Aff :( ');
        window.location.href = 'perg7.html';
    } else {
        mensagemAcerto.classList.remove('hidden');
        setTimeout(function() {
            window.location.href = 'perg7.html';
        }, 3000); // Redireciona para a próxima página após 5 segundos (5000 milissegundos)
    }
}


function conferirResposta7(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta7) {
        alert('Acertou!!!');
        window.location.href = 'perg8.html';
    } else {
        alert('Errou!!!');
    }
}


function conferirResposta8(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta8) {
        alert('Acertou!!!');
        window.location.href = 'perg9.html';
    } else {
        alert('Errou!!!');
    }
}


function conferirResposta9(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta9) {
        alert('Acertou!!!');
        alert('Se prepare para o gran finale');
        window.location.href = 'perg10.html';
    } else {
        alert('Errou!!!');
    }
}


function conferirResposta10(event) {
    event.preventDefault(); // Evita o evento padrão de clique no botão

    const alternativas = document.getElementsByName('alternativa');

    let respostaSelecionada;
    for (let i = 0; i < alternativas.length; i++) {
        if (alternativas[i].checked) {
            respostaSelecionada = alternativas[i].value;
            break;
        }
    }

    if (respostaSelecionada === respostaCorreta10) {
        alert('Obaaaaaa');
        window.location.href = 'final.html';
    } else {
        alert('Oxe');
    }
}