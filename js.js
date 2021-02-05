let simbolos = ["\u2660", "\u2663", "\u2665", "\u2666"];
let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let colores = ["red", "black"];

var lista = [];
// function generarCarta() {
const generarCarta = () => {
  lista = [];
  document.getElementById("linea2").innerHTML = "";
  let numcartas = document.getElementById("entrada").value;
  for (let i = 0; i < numcartas; i++) {
    let simboloSeleccionado =
      simbolos[Math.floor(Math.random() * simbolos.length)];
    let numeroseleccionado =
      numeros[Math.floor(Math.random() * numeros.length)];
    let colorseleccionado = colores[Math.floor(Math.random() * colores.length)];

    var elemento = document.createElement("div");
    elemento.innerHTML =
      '<div class="contenedor" ><div id="divsup" class="divsup">' +
      simboloSeleccionado +
      '</div><div id="divcentral" class="divcentral">' +
      numeroseleccionado +
      '</div><div id="divinf" class="divinf">' +
      simboloSeleccionado +
      "</div></div>";
    elemento.style.color = colorseleccionado;
    document.getElementById("linea2").appendChild(elemento);

    var diccionario = {
      number: numeroseleccionado,
      simbol: simboloSeleccionado,
      color: colorseleccionado,
    };
    lista.push(diccionario);
  }

  console.log(lista, "lista");
};

function ordenar(arr) {
    document.getElementById("linea3").innerHTML = "";
    let yaestaordenado=false
  let = pasosOrdenamiento = [];
  pasosOrdenamiento = [];
  
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
 
      if (
        numeros.indexOf(arr[index].number) >
        numeros.indexOf(arr[index + 1].number)
      ) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
// pasosOrdenamiento.push(arr.slice())
    wall--;

 let valorordenado=verificarOrden(arr.slice());
        console.log(valorordenado,"ordenado")
        if(!yaestaordenado){pasosOrdenamiento.push(arr.slice());}
yaestaordenado=valorordenado

  }
 
console.log(pasosOrdenamiento,"pasos")

insertarHtml(pasosOrdenamiento);
}


function verificarOrden(entrada) {
  let j = 0;
  let binario = true;
  while (j < entrada.length - 1) {
    if (entrada[j].number > entrada[j + 1].number) {
      binario = false;
    }
    j++;
  }
  return binario;
}


function insertarHtml(listaEntrada) {
  //lista de entrada es una lista con el juego de cartas ordenada por turno
  // seria listaEntrada [juego1,juego2,juego3]
  //juego1=[{color:red,numero=8,simbolo=flor},{color:red,numero=8,simbolo=flor}]

  for (let i = 0; i < listaEntrada.length; i++) {
    let rondaDeCartas = listaEntrada[i];

    let divisionparacambiodelinea = document.createElement("div"); //creo una división donde meteré los grupos de cartas
    divisionparacambiodelinea.style.display = "flex"; // flex para que sean todos en la misma linea
    var creadorid = "division" + i.toString(); //crear id genericos.. division1 division2, etc
    divisionparacambiodelinea.id = creadorid;
    document.getElementById("linea3").appendChild(divisionparacambiodelinea); //se ingresa en linea 3

    for (let j = 0; j < rondaDeCartas.length; j++) {
      let carta = rondaDeCartas[j];
      let numero = carta.number.toString();
      let simbolo = carta.simbol;
      let color = carta.color;
      // console.log(carta,numero,simbolo,color)

      var elemento = document.createElement("div"); //esta división es donde va cada carta

      elemento.innerHTML =
        '<div class="contenedor" ><div id="divsup" class="divsup">' +
        simbolo +
        '</div><div id="divcentral" class="divcentral">' +
        numero +
        '</div><div id="divinf" class="divinf">' +
        simbolo +
        "</div></div>";
      elemento.style.color = color;
      document.getElementById(creadorid).appendChild(elemento);
    }
  }
}


function selecting(arr){
    let yaestaordenado=false;
    document.getElementById("linea3").innerHTML = "";
    pasosOrdenamiento = [];
let min=0; 
while (min< arr.length-1){
for (let i=min+1;i<arr.length;i++){
if (numeros.indexOf(arr[min].number)>numeros.indexOf(arr[i].number)){
let aux=arr[min];
arr[min]=arr[i];
arr[i]=aux;


}

} min++;

 let valorordenado = verificarOrden(arr.slice());
 console.log(valorordenado, "ordenado");
 if (!yaestaordenado) {
   pasosOrdenamiento.push(arr.slice());
 }
 yaestaordenado = valorordenado;


}
console.log(arr,"acá")
console.log(pasosOrdenamiento,"pasosordenamiento")
insertarHtml(pasosOrdenamiento)

}