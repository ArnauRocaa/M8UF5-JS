function trivial() {
    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('cognom').value;
    var edad = document.getElementById('edad').value;

    if (document.getElementById('edad').value >= 18) {
        if(nombre && apellido){
        window.location.href="web/trivial.api.htm"
        localStorage.setItem("edad", edat)
        }else{
            alert("Has de posar nom i cognom")
        }
        }else {
            alert("No hi pots accedir!")
    }
}
var contingut = document.querySelector('#contingut')
function agafar() {
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
console.log(data.results['0'])
contingut.innerHTML = `
<img src="${data.results['0'].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p>Nombre: ${data.results['0'].name.last}</p>
`
})
}

function respuesta(){
    var resposta1 = "Barcelona";
    var resposta2 = "Stanley Matthews";
    var resposta3 = "Ipurua";
    var resposta4 = "Isak";
    var resposta5 = "Sevilla-Betis";

    if (document.getElementById('res1').value == resposta1) {
        document.getElementById('resposta1').innerHTML = resposta1
    }
    else {
        document.getElementById('resposta1').innerHTML = resposta1
    }


    if (document.getElementById('res2').value == resposta2) {
        document.getElementById('resposta2').innerHTML = resposta2
    }
    else {
        document.getElementById('resposta2').innerHTML = resposta2
    }


    if (document.getElementById('res3').value == resposta3) {
        document.getElementById('resposta3').innerHTML = resposta3
    }
    else {
        document.getElementById('resposta3').innerHTML = resposta3
    }


    if (document.getElementById('res4').value == resposta4) {
        document.getElementById('resposta4').innerHTML = resposta4
    }
    else {
        document.getElementById('resposta4').innerHTML = resposta4
    }


    if (document.getElementById('res5').value == resposta5) {
        document.getElementById('resposta5').innerHTML = resposta5
    }
    else {        
        document.getElementById('resposta5').innerHTML = resposta5
    }
}
