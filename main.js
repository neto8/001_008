function stringNumeros(arreglo) {
    var nuevoArreglo = [];
    nuevoArreglo = arreglo.split(':');
    var suma = 0;
    var media = 0;
    for (var j = 0; j < nuevoArreglo.length; j++) {

        suma = suma + parseInt(nuevoArreglo[j], 0);

    }
    media = suma / nuevoArreglo.length;
    return media;
}
console.log(stringNumeros('80:70:90:100'));
