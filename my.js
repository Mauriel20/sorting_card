let simbolos = ["\u2660", "\u2663", "\u2665", "\u2666"];
let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let colores = ["red", "black"];

var lista = [];

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

    wall--;

 let valorordenado=verificarOrden(arr.slice());
      
        if(!yaestaordenado){pasosOrdenamiento.push(arr.slice());}
yaestaordenado=valorordenado

  }


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


  for (let i = 0; i < listaEntrada.length; i++) {
    let rondaDeCartas = listaEntrada[i];

    let divisionparacambiodelinea = document.createElement("div"); 
    divisionparacambiodelinea.style.display = "flex"; 
    var creadorid = "division" + i.toString(); 
    divisionparacambiodelinea.id = creadorid;
    document.getElementById("linea3").appendChild(divisionparacambiodelinea); 

    for (let j = 0; j < rondaDeCartas.length; j++) {
      let carta = rondaDeCartas[j];
      let numero = carta.number.toString();
      let simbolo = carta.simbol;
      let color = carta.color;
      

      var elemento = document.createElement("div"); 

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

 if (!yaestaordenado) {
   pasosOrdenamiento.push(arr.slice());
 }
 yaestaordenado = valorordenado;


}

insertarHtml(pasosOrdenamiento)

}