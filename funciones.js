window.onload = () => {
    // Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.
    function resta (a,b) {
        return a-b
    }
    // Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la siguiente clasificación.
    // Nota: Debes de usar el Switch.
    // 0 - 4: Insuficiente.
    // 5 - 6: Suficiente.
    // 7 - 8: Notable.
    // 9 - 10: Sobresaliente.
    duplicaNumero(3)
    function duplicaNumero(num){
        console.log(typeof num)
        if(typeof num == "number"){
            switch (num) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                     console.log("Insuficiente");
                    break;
                case 5:
                case 6:
                    console.log("Suficiente");
                    break;
                case 7:
                case 8:
                    console.log("notable");
                    break;
                case 9:
                case 10:
                    console.log("sobresaliente");
                    break;
            
                default:
                    console.log("error");
                    
                    break;
            }
        }else{
            console.log("espero un numero");
            
        }
    }
    // Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’.
    function duplicaNumero(num){
        if(typeof num == "number"){
            return num*2;
        }else{
            console.log("espero un numero");
            
        }
    }

    // Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
    function caracterInicial(cadena){
        if(typeof cadena == "string"){
            if(cadena.length <= 0){
                return "debo ser ejecutada con un string no vacio";
            }else{
                return cadena[0];
            }
        }else{
            return "Debo ser ejecutada con un string";
        }
    }
    console.log(caracterInicial("Breyner"));
    // Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.
    function ultimoCaracter(cadena){
        if(typeof cadena == "string"){
            if(cadena.length <= 0){
                return "debo ser ejecutada con un string no vacio";
            }else{
                return cadena[cadena.length-1];
            }
        }else{
            return "Debo ser ejecutada con un string";
        }
    }
    console.log(ultimoCaracter("breyner"));
    // Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
    function cuentaCaracteres(cadena){
        if(typeof cadena == "string"){
            return cadena.length;
        }else{
            return "Debo ser ejecutada con una cadena"
        }
    }

    // Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
    // Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.
    function esPalindromo(cadena){
        if(typeof cadena == "string" && cadena.length > 0){
            let aux = cadena.split('').reverse().join('');
            if(aux == cadena){
                return "Es palindromo"
            }else{
                return "No es palindromo"
            }

        }else{
            return "no es un formato correcto"
        }
        
        
    }
    console.log(esPalindromo("orejero"));
    
    // Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
    // Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
    function getPrecioMostrar(num){
        if(typeof num == "number"){
            return num.toFixed(2);
        }else{
            return "no es un formato correcto"
        }
    }
    console.log(getPrecioMostrar(2))
    // Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
    function division(num1,num2){
        if(typeof num1 == "number" && typeof num2 == "number"){
            return num1/num2;
        }else{
            return "necesitamos 2 numeros crack";
        }
    }
    console.log(division(20,"5"));
    // Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].
    function mayor5(array){
        let arrayAux = [];
        for(var i = 0 ; i< array.length;i++){
            if(array[i] > 5){
                arrayAux.push(array[i]);
            }
        }
        return arrayAux
    }
    console.log(mayor5([5,1,6,2,9,10,3,2]))
    // Crea una función que nos pida un número por prompt y que nos indique si es o no un número primo. Debe devolver true si es primo, sino false. 
    // Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
    function esPrimo(num){
        let divisores = 0;
        for(var i = 1; i <= num ;i++){
            if(num % i === 0){
                divisores++;
            }
        }
        if (divisores === 2) {
            return "es primo";
        } else {
            return "no es primo";
        }
    }

    console.log(esPrimo(6),"asd")// 2,3,5,7,11,13,17,19
    

}