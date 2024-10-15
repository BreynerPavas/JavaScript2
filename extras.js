window.onload = () => {
    // Crear la función obtenerImpares que acepte como argumento un array de números y devuelva un array con los elementos impares.
    function obtenerImpares(array) {
        let aux = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] % 2 != 0) {
                aux.push(array[i]);
            }
        }
        return aux;
    }
    console.log(obtenerImpares([2, 3, 4, 5, 6, 7, 8, 9]))
    // Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6.
    function sumarArray(array) {
        let aux = 0;
        for (var i = 0; i < array.length; i++) {
            aux += array[i];
        }
        return aux;
    }
    console.log(sumarArray([1, 2, 3]))
    // Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24.
    function multiplicarArray(array) {
        let aux = 1;
        for (var i = 0; i < array.length; i++) {
            aux *= array[i];
        }
        return aux;
    }
    console.log(multiplicarArray([2, 3, 4]));
    // Crea una función checkPassword con una variable tipo string que contenga una contraseña cualquiera. Después, se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes, ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena” (ej. un alert). Piensa bien en la condición de salida (3 intentos y, si acierta, sale aunque le queden intentos).
    function checkPassword(pass) {
        let intentos = 1;
        let guess = "";
        guess = prompt("ingrese su contraseña");
        if (guess == pass) {
            alert("contraseña correcta");
        } else {
            intentos++;
            guess = prompt("Constraseña incorrecta intente de nuevo");
            if (guess == pass) {
                alert("contraseña correcta");
            } else {
                intentos++;
                guess = prompt("Constraseña incorrecta intente de nuevo");
                if (guess == pass) {
                    alert("contraseña correcta");
                } else {
                    alert("numero de intentos maximos alcanzados")

                }
            }
        }
    }
    checkPassword("Breyner");

}