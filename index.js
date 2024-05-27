function recomendarVino(preferencia) {
    let recomendacion = "";

    switch(preferencia) {
        case "tinto":
            recomendacion = "Te recomiendo probar un Malbec argentino, es una excelente opción.";
            break;
        case "blanco":
            recomendacion = "Un Sauvignon Blanc de Nueva Zelanda podría ser perfecto para ti.";
            break;
        case "rosado":
            recomendacion = "Un Rosé francés sería una elección refrescante y deliciosa.";
            break;
        default:
            recomendacion = "No reconozco esa preferencia, ¿podrías elegir entre tinto, blanco o rosado?";
    }

    return recomendacion;
}

let preferenciaCliente = prompt("Hola, ¿qué tipo de vino prefieres? (tinto, blanco o rosado)");

let recomendacionVino = recomendarVino(preferenciaCliente);
