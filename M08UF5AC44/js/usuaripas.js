function validar(){
    var psswd=document.getElementById("psswd").value;
    var confpsswd=document.getElementById("confpsswd").value;
    var usuari=document.getElementById("usuari").value;

    if (usuari=="Ibai"){
        if (psswd=="1234" && confpsswd==psswd){
        alert("Usuari i password correctes")
        }
        else {
            alert("Usuari o password incorrectes")
        }
    }  
    else {
        alert("Usuari o password incorrectes")
    }
}
