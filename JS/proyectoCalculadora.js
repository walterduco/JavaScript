function factorial (num1) {
    num1 = parseInt(prompt ("Ingrese un valor entero: "));
    if (num1 <= 0){
        alert("Se debe ingresar un número natural.")
    }
    else{ 
	resultado = 1; 
	for (i=1; i<=num1; i++) {
		resultado = resultado * i; 
	}
	return resultado; 
    }
}

function sumatoria (num1, num2){
    num1 = parseInt (prompt ("Ingrese el valor inicial: "))
    num2 = parseInt (prompt ("Ingrese el valor final: "))
    if (num1 < num2){
        resultado = ((num2 * (num2 + 1))  - ((num1 * (num1 - 1))))/2
        return resultado
    }
    else{
        alert("El valor inicial debe ser menor o igual que el valor final.")
    }
}

function porcentaje (num1, num2){
    num1 = parseFloat(prompt ("Ingrese un número: "))
    num2 = parseFloat(prompt ("Ingrese el porcentaje a calcular: "))
    if (num2 < 0){
        alert("El porcentaje a calcular debe ser un número positivo.")
    }
    else{
        resultado = (num1 * num2)/100
        return resultado
    }
}

function calculadora(num1, num2){
    num1 = parseFloat(prompt ("Ingrese un número: "))
    num2 = parseFloat(prompt ("Ingrese un número: "))
    let operacion = prompt ("Ingrese la operación a realizar:\n+\n-\n*\n/")
    switch(operacion){
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        res = num1 / num2;
        break;
    default: 
        alert("Se debe ingresar una operación válida.")
    }
}

let opcion
let num1 = 0
let num2 = 0
let resultado = 0
do {
    opcion = prompt("1-Calculadora básica\n2-Calcular factorial\n3-Calcular sumatoria\n4-Calcular porcentaje\n5-Salir")
    opcion = parseInt(opcion)
    switch (opcion) {
        case 1:
            alert("Ingresando a calculadora...")
            calculadora (num1, num2)
            alert ("El resultado es: " + resultado)
            break
        case 2:
            alert("Ingresando a cálculo de factorial...")
            factorial (num1)
            alert ("El resultado es: " + resultado)
            break
        case 3:
            alert("Ingresando a cálculo de sumatoria...")
            sumatoria (num1, num2)
            alert ("El resultado es: " + resultado)
            break
        case 4:
            alert("Ingresando a cálculo de porcentaje...")
            porcentaje (num1, num2)
            alert ("El resultado es: " + resultado)
            break
        case 5:
            alert ("Saliendo...")    
            break
        default:
            alert("!Opcion invalida!")
        }
}while(opcion != 5)

