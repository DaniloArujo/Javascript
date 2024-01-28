
document.getElementById("isSelected").onclick = () => {
    if(document.getElementById("caixinha").checked == true){
        document.getElementById("resultado").innerHTML = "checked"
    }else{
        document.getElementById("resultado").innerHTML = "not checked"
    }
}
