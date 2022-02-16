function calcula(op) {
    document.getElementById("text").value+=(op)
}
function borrar() {
    document.getElementById("text").value=" "
}
function igual() {
    var resultat=document.getElementById("text").value
    document.getElementById("text").value=eval(resultat)
}