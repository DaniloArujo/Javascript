let sidea;
let sideb;

function calcula( sidea, sideb){
    return Math.sqrt(Math.pow(sidea, 2) + Math.pow(sideb, 2))
}

document.getElementById("resetar").onclick = () => {
    document.getElementById("sidea").value = 0;
    document.getElementById("sideb").value = 0;
    document.getElementById("result").innerHTML = ""
}



document.getElementById("calcular").onclick = () => {
    sidea = document.getElementById("sidea").value
    Number(sidea)
    sideb = document.getElementById("sideb").value
    Number(sideb)

    if(sidea <= 0 || sideb <= 0){
        document.getElementById("result").innerHTML = "Valores inválidos"
        return
    }

    result = calcula(sidea, sideb)

    
    document.getElementById("result").innerHTML = "side c = " + result  
    

    
}