// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  var i = 0;
  for (let clave in objeto){
    matriz[i] = [clave , objeto[clave]];
    i++;
  }
  return matriz;
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var repe = 0;
  var suma = 0;
  var igual = []
  var valores = {};
  for (var i = 0 ; i < string.length ; i++){
    suma = 0;
    repe = 0;
    for (var k = 0; k < igual.length; k++){
      if (igual[k] === string[i]){
      repe = 1;
    }
  }
    for (var j = 0; j <= string.length ; j++){
      if (repe === 1){
        break;
      }
      else if (string[i] === string[j]){
        suma = suma + 1;
        igual[i] = string[i]
    }
  }
    if (repe === 1){
      continue;
    }
    valores[igual[i]] = suma;
  }
  return valores;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = ""
  for (var i = 0; i < s.length ; i++){
    if (s[i] === s[i].toUpperCase()){
      mayus = mayus + s[i];
    }
  }
  for (var i = 0;i < s.length; i++){
    if (s[i] === s[i].toLowerCase()){
      mayus = mayus + s[i];
    }
  }
  return mayus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var n = 0
  var invertido = ""
  var palabras = []
  var final = ""
  for (var i = 0 ; i < str.length ; i++){
    invertido = invertido + str[(str.length-1)-i];
  }
  for (var j = 0 ; j < invertido.length ; j++){
    if (invertido[j] === " "){
      n = n + 1
      j = j + 1;
    }
    if (palabras[n])
    palabras[n] = palabras[n] + (invertido[j]);
    else {
      palabras[n] = invertido[j];
    }
  }
  final = palabras.reduce(function(acc, valor){
    return valor + " " + acc
  }, "");
  final = final.slice(0,final.length - 1)
  return final; 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var panumero = numero.toString();
  var tamaño = panumero.length - 1;
  for (i = 0; i < panumero.length ; i++){
    if (panumero[i] === panumero[tamaño - i]){
      var no = 0
    }
    else {
      var no = 1;
      break;
    }
  }
  if (no === 0){
    return "Es capicua";
  }
  else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nueva = ""
  for (let letra of cadena){
    if (letra === "a" || letra === "b" || letra === "c")
    {
      continue;
    }
    else {
      nueva = nueva + letra;
    }
  }
  return nueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nueva = arr.slice();
  var compare = arr.slice();
  for(var k = 0; k < arr.length; k++){
    var j = 0
    for (var i = 0 ; i < arr.length - 1; i++){
      if (nueva[j].length <= compare[i+1].length){
      j = j + 1;
     }
      else {
       nueva[j] = compare[i+1];
       nueva[j+1] = compare[i];
      }
    }
    compare = nueva.slice();
  }
  return nueva;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevo = []
  for (var i = 0 ; i < arreglo1.length ; i++){
    for (var j = 0; j < arreglo2.length ; j++){
      if (nuevo[j]){
        continue;
      }
      if (arreglo1[i] === arreglo2[j]){
        nuevo.push(arreglo1[i]);
        break;
      }
    }
  }
  return nuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

