//verifica a condição do tempo


let tempo 
let sunny 

document.getElementById("enviar").onclick = () => {
    tempo = document.getElementById("temperatura").value;
    tempo = Number(tempo)

    sunny = document.getElementById("sol")
    if(tempo > 0 && tempo < 30 && sunny){
        document.getElementById('resultado').innerHTML = "O clima está agradável"
    }else{
        
        document.getElementById('resultado').innerHTML = "O clima está ruim"
    }
}
