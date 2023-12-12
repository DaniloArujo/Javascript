

function mudacor() {
    let theme = document.getElementById("corInput").value;
    document.getElementById("corpo").style.backgroundColor = theme;
    document.getElementById("selectedColor").innerHTML = `Cor selecionada: ${theme}`;
    
    
}