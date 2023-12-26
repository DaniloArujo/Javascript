let randomnumber 

let maximunnumber = 3


document.getElementById("create").onclick = () =>{
    randomnumber = Math.floor(Math.random() * maximunnumber ) + 1 ;
    document.getElementById("number").innerHTML = randomnumber;
}
