let media;
let var01;
let var02;

document.getElementById("submitbutton").onclick = function() {
    var01 = parseFloat(document.getElementById("nota01").value);
    var02 = parseFloat(document.getElementById("nota02").value);

    console.log(var01)
    console.log(var02)

    if(!validaValores(var01,var02)){
        document.getElementById("Resultado").innerHTML = "Numero inválido!"
    }else{
        media = calculaMedia(var01, var02)
        if(media < 5){
            document.getElementById("Resultado").innerHTML = `sua média foi ${media}, você foi reprovado!`
        }else if(media < 6){
            document.getElementById("Resultado").innerHTML = `sua média foi ${media}, você está de recuperação!`
        }else{
            document.getElementById("Resultado").innerHTML = `sua média foi ${media}, você está aprovado!`
        }
    }
}

function calculaMedia(var01, var02){
    return (var01 + var02) / 2;
}

function validaValores(var01, var02){
    if(var01 < 0 || var02 < 0)
        return false;
    if(var01 > 10 || var02 > 10)
        return false;
    if(var01 == null || var02 == null)
        return false;
    if(isNaN(var01) || isNaN(var02))
        return false;
    return true;
}


document.getElementById("resetar").onclick = function(){
    document.getElementById("Resultado").innerHTML = ""
    document.getElementById("nota01").value = ""
    document.getElementById("nota02").value = ""
}