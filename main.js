let pregunta = prompt("Elija Que auto desea comprar:\n-Ford\n-Chevrolet\n-Jeep\n-Volkswagen\n-salir ").toLocaleLowerCase;
//Ford
let Partner = 7000000;
let Ranger = 20000000;
let Bronco = 24000000;
//Chevrolet
let Onix = 8000000;
let S10 = 19000000;
let Tracker = 14000000;
//Jeep
let Renegade = 10000000;
let Compass = 19000000;
let Cherokee = 30000000;
//Volkswagen
let Gol = 4000000;
let Vento = 12000000;
let Tiguan = 18000000;

function Ford() {
    const numeroUno = parseInt(prompt("Cuantas Partner Quiere comprar?"));
    const numeroDos = parseInt(prompt("Cuantas Ranger Quiere comrar?"));
    const numeroTres = parseInt(prompt("Cuantas Bronco Quiere comprar?"));
    alert(`Usted Quiere Comprar en total:\n${numeroUno} Partner\n${numeroDos} Ranger\n${numeroTres} Bronco`);
    alert(`El total de su compra es de ${numeroUno*Partner+numeroDos*Ranger+numeroTres*Bronco}`);
}

function Chevrolet() {
    const numeroUno = parseInt(prompt("Cuantos Onix Quiere Comprar?"));
    const numeroDos = parseInt(prompt("Cuantos S10 Quiere comprar?"));
    const numeroTres = parseInt(prompt("Cuantas Tracker Quiere Comprar?"));
    alert(`Usted Quiere Comprar en total:\n${numeroUno} Onix\n${numeroDos} S10\n${numeroTres} Tracker`);
    alert(`El total de su compra es de ${numeroUno*Onix+numeroDos*S10+numeroTres*Tracker}`);
}

function Jeep() {
    const numeroUno = parseInt(prompt("Cuantas Remegade quiere comprar?"));
    const numeroDos = parseInt(prompt("Cuantos Compass quiere comprar?"));
    const numeroTres = parseInt(prompt("Cuantas Cherokee quiere comprar?"));
    alert(`Usted Quiere Comprar en total:\n${numeroUno} Renegade\n${numeroDos} Compass\n${numeroTres} Cherokee`);
    alert(`El total de su compra es de ${numeroUno * Renegade + numeroDos * Compass + numeroTres * Cherokee}`);
}

function Volkswagen(){
    const numeroUno = parseInt(prompt("Cuantos Gol quiere comprar?"));
    const numeroDos = parseInt(prompt("Cuantos Vento quiere comprar?"));
    const numeroTres = parseInt(prompt("Cuantas Tiguan quiere comprar?"));
    alert(`Usted Quiere Comprar en total:\n${numeroUno} Gol\n${numeroDos} Vento\n${numeroTres} Tiguan`);
    alert(`El total de su compra es de ${numeroUno * Gol + numeroDos * Vento + numeroTres * Tiguan}`);
}



while(pregunta !== "salir"){
    switch(pregunta){
        case "Ford":
            alert("Vehículos Disponibles de Ford(por unidad):\nPartner: 7.000.000\nRanger: 20.000.000\nBronco: 24.000.000");
            Ford();
            break;
        case "Chevrolet":
            alert("Veículos Disponibles de Chevrolet(por unidad):\nOnix: 8.000.000\nS10: 19.000.000\nTracker: 14.000.000");
            Chevrolet();
            break;
        case "Jeep":
            alert("Vehículos Disponibles de Jeep(por unidad):\nRenegade: 10.000.000\nCompass: 19.000.000\nCherokee: 30.000.000");
            Jeep();
            break;
        case "Volkswagen":
            alert("Vehículos Disponibles de Jeep(por unidad):\nGol: 4.000.000\nVento: 12.000.000\nTiguan: 18.000.000")
            Volkswagen();
            break;
        
        default:
            alert("Opcion Incorrecta")
            break;
    }
    pregunta = prompt("Elija Que auto desea comprar:\n Ford \n Chevrolet \n Jeep \n Volkswagen \n salir ");
}
alert("Programa Finalizado, enter para cerrar")