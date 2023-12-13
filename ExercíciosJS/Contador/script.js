let contador = 0;

document.getElementById("subBtn").onclick = function(){
    contador -= 1;
    document.getElementById("contadordiv").innerHTML = contador
}

document.getElementById("resBtn").onclick = function(){
    contador = 0;
    document.getElementById("contadordiv").innerHTML = contador
}

document.getElementById("addBtn").onclick = function(){
    contador += 1;
    document.getElementById("contadordiv").innerHTML = contador
}