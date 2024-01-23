//verifica a condição do tempo


let tempo 
let sunny 

document.getElementById("enviar").onclick = () =>{
    tempo = document.getElementById("temperatura").value;
    tempo = Number(tempo)

    sunny = document.getElementById("sol").
    if(tempo > 0 && tempo < 30 && sunny){
        console.log("O clima está agradável");
    }else{
        console.log("o clima está ruim");
    }
}
