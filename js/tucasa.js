function calcularCasaYPatronus() {
    let color = document.getElementById("color").value;
    let numero = document.getElementById("numero").value;

    let casa = "";
    let patronus = "";

    switch (color) {
        case "rojo":
            casa = "Gryffindor";
            break;
        case "verde":
            casa = "Slytherin";
            break;
        case "azul":
            casa = "Ravenclaw";
            break;
        case "amarillo":
            casa = "Hufflepuff";
            break;
        default:
            alert("Por favor, elige un color válido.");
            return;
    }

    switch (numero) {
        case "1":
            patronus = "León";
            break;
        case "2":
            patronus = "Serpiente";
            break;
        case "3":
            patronus = "Hurón";
            break;
        case "4":
            patronus = "Gato";
            break;
        case "5":
            patronus = "Conejo";
            break;
        case "6":
            patronus = "Ciervo";
            break;
        case "7":
            patronus = "Perro";
            break;
        
        default:
            alert("Por favor, elige un número válido.");
            return;
    }

    alert("¡Eres de la casa " + casa + " y tu Patronus es un " + patronus + "!");
    location.reload();
}

