function validar(){
    var psswd=document.getElementById("psswd").value;
    var confpsswd=document.getElementById("confpsswd").value;
    
    if (psswd==confpsswd){
        alert("Usuari i password correctes")
        }
        else {
            alert("Usuari o password incorrectes")
        }
}
function guardar(){
    var nom=document.getElementById("nom").value;
    var cognom=document.getElementById("cognom").value;
    window.localStorage.setItem("nom", nom)
    window.localStorage.setItem("cognom", cognom)
    alert("S'han guardat les dades")
}
function recuperar(){
    var recuperarnom=localStorage.getItem("nom");
    var recuperarcognom=localStorage.getItem("cognom");
    document.getElementById("nom").value=recuperarnom
    document.getElementById("cognom").value=recuperarcognom
    alert("S'han recuperat les dades")
}
function esborrar(){
    var eliminarnom=localStorage.removeItem("nom");
    var eliminarcognom=localStorage.removeItem("cognom");
    document.getElementById("nom").value=eliminarnom
    document.getElementById("cognom").value=eliminarcognom
    console.log(window.localStorage.getItem("nom", nom)+ " del "+window.localStorage.getItem("cognom", nom))
    alert("S'han esborrat les dades")
}