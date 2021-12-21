
let text = "";

const lista = ["hondo","playo","aceitero","posacuenco","entrada","servilletero"];

lista.forEach(listaProductos);

function listaProductos (item, index) {
    text += index + " " + "Nombre: " + item + "<br>";
}

document.getElementById("mostrar").innerHTML = text




function crearParrafo (){

    let parrafo = document.createElement("p");

    parrafo.innerHTML= "Un vendedor se contactará para ayudarte con el proceso de compra";
    parrafo.classList.add("myStyle");
    document.getElementById("myDiv").appendChild(parrafo)

}
