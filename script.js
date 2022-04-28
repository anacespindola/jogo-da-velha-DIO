
const quadrados = document.querySelectorAll(".quadrado");
const section = document.querySelector('.quads-game');
const jogadorAtual = document.querySelector('.player-game');
const vencedorAtual = document.querySelector('.winner-game')

let jogadorDaVez, vencedor = null;


mudarJogador("X");

function mudaQuadrado(evento){

    if(vencedor !== null){
        return
    }

    const valorDoClique = evento.target
    let IdDoQuadrado = valorDoClique.id
    const quadradoSelecionado = document.getElementById(IdDoQuadrado);

    if(quadradoSelecionado.innerHTML !== "-") {
        return;
    }
    quadradoSelecionado.innerHTML = jogadorDaVez;
    quadradoSelecionado.style.color = "#000"
    verificadorJogada();  

}


function verificadorJogada(){
    if(jogadorDaVez === 'X'){
        jogadorDaVez = "O"
    }else {
        jogadorDaVez = "X"
    }
    mudarJogador(jogadorDaVez)
    checaSeHouveVencedor();

}



function mudarJogador(valor){
     jogadorDaVez = valor 
    jogadorAtual.innerHTML = jogadorDaVez;

}


function checaSeHouveVencedor(){
     const quadrado1 = document.getElementById("1");
     const quadrado2 = document.getElementById("2");
     const quadrado3 = document.getElementById("3");
     const quadrado4 = document.getElementById("4");
     const quadrado5 = document.getElementById("5");
     const quadrado6 = document.getElementById("6");
     const quadrado7 = document.getElementById("7");
     const quadrado8 = document.getElementById("8");
     const quadrado9 = document.getElementById("9");

    if(verificaSequencia(quadrado1, quadrado2, quadrado3)) {
           quadradoVencedor(quadrado1, quadrado2, quadrado3)
           vencedorHtml(quadrado1)
           return;
    }if(verificaSequencia(quadrado4, quadrado5, quadrado6)) {
            quadradoVencedor(quadrado4, quadrado5, quadrado6)
            vencedorHtml(quadrado4)
            return;
    }if(verificaSequencia(quadrado7, quadrado8, quadrado9)) {
            quadradoVencedor(quadrado7, quadrado8, quadrado9)
            vencedorHtml(quadrado7)
            return;
    } if(verificaSequencia(quadrado1, quadrado4, quadrado7)) {
            quadradoVencedor(quadrado1, quadrado4, quadrado7)
            vencedorHtml(quadrado1)
            return;
    } if(verificaSequencia(quadrado2, quadrado5, quadrado8)) {
            quadradoVencedor(quadrado2, quadrado5, quadrado8)
            vencedorHtml(quadrado2)
            return;
    } if(verificaSequencia(quadrado3, quadrado6, quadrado9)) {
            quadradoVencedor(quadrado3, quadrado6, quadrado9)
            vencedorHtml(quadrado3)
            return;
   } if(verificaSequencia(quadrado1, quadrado5, quadrado9)) {
            quadradoVencedor(quadrado1, quadrado5, quadrado9)
            vencedorHtml(quadrado1)
            return;
}    if(verificaSequencia(quadrado3, quadrado5, quadrado7)) {
           quadradoVencedor(quadrado3, quadrado5, quadrado7)
           vencedorHtml(quadrado3)
           
}
    
}


function quadradoVencedor(quad1, quad2,quad3){
   quad1.style.background = "#defc9d";
   quad2.style.background = "#defc9d";
   quad3.style.background = "#defc9d";
}

function vencedorHtml(quadrado){
     vencedor = quadrado.innerHTML;
     vencedorAtual.innerHTML = vencedor;
}


function verificaSequencia(quad1, quad2, quad3){
    let igual = false;
    if(quad1.innerHTML !== "-" && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        igual = true;
    }

    return igual
}

function reiniciaJogo(){
    vencedor = null;
    vencedorAtual.innerHTML = '';

    for(let i=0; i <= 8; i++){
         quadrados[i].innerHTML = "-";
         quadrados[i].style.background = "whitesmoke";
         quadrados[i].style.color = "whitesmoke";
    }

    mudarJogador("X")
}

const btn = document.getElementById('play');

btn.addEventListener('click', reiniciaJogo)

section.addEventListener("click", mudaQuadrado)