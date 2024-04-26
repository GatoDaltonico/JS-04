const prompt = require('prompt-sync')();

// Ejercicio 1. Suma de Resistencias en Serie
function sumarResistencias() {
    const resistencias = [];
    const cantidad = parseInt(prompt('Ingrese la cantidad de resistencias: '));
    for (let i = 0; i < cantidad; i++) {
        resistencias.push(parseFloat(prompt(`Ingrese la resistencia ${i + 1}: `)));
    }
    let suma = 0;
    for (let i = 0; i < resistencias.length; i++) {
        suma += Math.abs(resistencias[i]);
    }
    console.log(`La suma de las resistencias en serie es: ${suma} ohms`);
}

// Ejercicio 2. Número dividido en mitades
function dividirNumero() {
    const num = parseFloat(prompt('Ingrese un número para dividir en mitades: '));
    const mitades = [num / 2, num / 2];
    console.log(`El número dividido en mitades es: ${mitades}`);
}

// Ejercicio 3. Sociedad Secreta
function nombreSecreto() {
    const miembros = prompt('Ingrese los nombres de los miembros separados por coma: ').split(',');
    const iniciales = [];

    miembros.forEach(miembro => {
        const nombreLimpio = miembro.trim().toUpperCase(); // Convertimos a mayúsculas
        const primeraLetra = nombreLimpio[0];
        iniciales.push(primeraLetra);
    });

    const nombreSecreto = iniciales.sort().join('');

    console.log(`El nombre secreto de la sociedad es: ${nombreSecreto}`);
}

// Ejercicio 4. Estado en línea
function estadoEnLinea() {
    const usuarios = prompt('Ingrese los nombres de los usuarios en línea separados por coma: ').split(',');
    if (usuarios.length === 0) console.log('No hay usuarios en línea');
    else if (usuarios.length === 1) console.log(`${usuarios[0]} está en línea`);
    else if (usuarios.length === 2) console.log(`${usuarios.join(' y ')} están en línea`);
    else console.log(`${usuarios.slice(0, 2).join(', ')} y ${usuarios.length - 2} más están en línea`);
}

// Ejercicio 5. Array de Múltiplos
function arrayDeMultiplos() {
    const numero = parseFloat(prompt('Ingrese el número del cual desea obtener múltiplos: '));
    const longitud = parseInt(prompt('Ingrese la longitud del array de múltiplos: '));
    const multiplos = [];
    for (let i = 1; i <= longitud; i++) {
        multiplos.push(numero * i);
    }
    console.log(`El array de múltiplos es: ${multiplos}`);
}

// Ejercicio 6. Dominancia Positiva en Array
function dominanciaPositiva() {
    const elementos = prompt('Ingrese los elementos del array separados por coma: ').split(',').map(Number);
    let positivos = 0;
    let negativos = 0;
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] > 0) positivos++;
        else if (elementos[i] < 0) negativos++;
    }
    console.log(`El array es positivamente dominante: ${positivos > negativos}`);
}

// Ejercicio 7. Promedio Antipodal
function promedioAntipodal() {
    const array = prompt('Ingrese los elementos del array separados por coma: ').split(',').map(Number);
    
    // Eliminar el elemento del medio si la longitud del array es impar
    if (array.length % 2 !== 0) {
        const indiceMedio = Math.floor(array.length / 2);
        array.splice(indiceMedio, 1);
    }
    
    // Dividir el array en dos partes iguales
    const mitad = Math.floor(array.length / 2);
    const primeraMitad = array.slice(0, mitad);
    const segundaMitad = array.slice(mitad);
    
    // Calcular los promedios antipodales
    const resultado = primeraMitad.map((valor, indice) => {
        return (valor + segundaMitad[segundaMitad.length - 1 - indice]) / 2;
    });

    console.log(`El resultado del promedio antipodal es: ${resultado}`);
}

// Ejecución de las funciones en orden
sumarResistencias();
dividirNumero();
nombreSecreto();
estadoEnLinea();
arrayDeMultiplos();
dominanciaPositiva();
promedioAntipodal();
