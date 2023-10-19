var setadireita = window.document.getElementById("setadireita");
var Leonardo = window.document.getElementById("Leonardo");
var Samanta  = window.document.getElementById("Samanta");
var bruna    = window.document.getElementById("bruna");
var setaesquerda = window.document.getElementById("setaesquerda");

function RolarParaDireita() {
Leonardo.style ="display:none"
bruna.style ="display:flex"
setaesquerda.style = "display:flex; margin-top:70px; margin-left:150px"
setadireita.style = "display:none;"

}
 
function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex; margin-top:55px"
    setaesquerda.style = "display:none"


}