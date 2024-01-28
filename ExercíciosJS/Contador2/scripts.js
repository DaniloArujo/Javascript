let contador = 0

document.getElementById("mais").onclick = ()=>{
    contador ++
    document.getElementById("contador").innerHTML = contador
}

document.getElementById("sub").onclick = ()=>{
    contador --
    document.getElementById("contador").innerHTML = contador
}

document.getElementById("reset").onclick = ()=>{
    contador = 0
    document.getElementById("contador").innerHTML = contador
}