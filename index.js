const APAYMENT= 1
const INTERESONE= 1.1
const INTERES_TWO= 1.25
const INTERES_THREE= 1.16

let preice_final= calc(APAYMENT, INTERESONE, INTERES_TWO, INTERES_THREE)
final_result(preice_final)

function calc(apayment, interesone, interestwo, interesthree){
    const PAY= prompt("Ingrese monto a pagar")

    let select= parseInt(prompt("Ingresar cantidad de cuotas en las que se va a efectuar el pago:\n 1. Cuota \n 3. Cuotas \n 6. Cuotas \n 12. Cuotas"))
    switch(select){
        case 1:
            alert("Usted selecciono realizar su pago en una cuota sin interes")
            const ONE= PAY * APAYMENT
            return ONE
        break
        case 3:
            alert("Usted selecciono realizar el pago en tres cuotas. El interes es de un 10% sobre el total")
            const THREE= PAY * INTERESONE
            return THREE
        break
        case 6:
            alert("Usted selecciono realizar el pago en seis cuotas. El interes es de un 25% sobre el total")
            const SIX= PAY * INTERES_TWO
            return SIX
        break
        case 12:
            alert("Usted selecciono realizar el pago en doce cuotas. El interes es de un 16% sobre el total")
            const TWELVE= PAY * INTERES_THREE
            return TWELVE
        break
        default:
            alert("Usted no ha seleccionado correctamente ninguna de las opciones indicadas")
        break
    }
}

function final_result(preice){
    alert("El total a pagar con el interes incluido es de "+ preice)
}
