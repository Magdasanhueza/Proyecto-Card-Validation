function formulario1() {
    let numbercard = "";
    numbercard = document.getElementById("numbercard").value;
    if (numbercard == "") {
        alert("Ingresa correctamente los 16 números de tu tarjeta")
    }
    else {
        let result = validateCreditCard(numbercard)
        if (result == true){
            document.getElementById("pantalla1").style.display = "none";
            let numberCardMaskifyed = maskify1(numbercard)
            let maskify = document.getElementById("maskify")
            maskify.innerHTML = numberCardMaskifyed.join("")
            //innerHTML le da el valor al array vacio y Join junta todo el array en string [H,O,L,A]---> HOLA
            document.getElementById("pantalla2").style.display = "block";
        }
        else {
            document.getElementById("pantalla1").style.display = "none";
            let numberCardMaskifyed = maskify1(numbercard)
            let maskify = document.getElementById("maskify2")
            maskify.innerHTML = numberCardMaskifyed.join("")
            document.getElementById("pantalla3").style.display = "block";
            
        }
    }
}
function maskify1(numbercard){
    let numbercardString = numbercard.toString().split("")
    let responseMaskify = []
    console.log("numbercard: ", numbercardString)
    console.log("numbercard: ", typeof numbercardString)
    console.log(numbercardString.length - 4)
    for (let i=0; i<numbercardString.length; i++){
        if (i >= numbercardString.length - 4){
            console.log("numbercard[i]: ", numbercardString[i])
            responseMaskify.push(numbercardString[i].toString())
        } else {
            responseMaskify.push("*")
        }
        
    }
    return responseMaskify 
}
function validateCreditCard(numbercard){
    console.log("validating credit card")
    if (numbercard.length ==16)
    {
        let resultStep1 = []
        console.log(numbercard)
        //paso 1 "for" recorrer elementos y multiplicar *2 las posiciones pares
        for (let i=0; i<numbercard.length; i++){
            console.log(numbercard[i])
            if (i%2==0){
                //multiplicar *2
                resultStep1[i]=numbercard[i]*2
                //el resultado de numbercard x2 este en la misma pisicion de resultstep en
                // parseInt sirve para llevar a numero el string numbercard en la posicion i
                
            }
            else {
                resultStep1[i]=numbercard[i]
            }
        } 
        for (let i=0; i<numbercard.length; i++){
            console.log(numbercard[i])
            if (i%2==0){
                if (resultStep1[i]>=10){
                    console.log("resultStep1[i]: ",resultStep1[i])
                    let numberInString=resultStep1[i].toString().split("")
                    //toString para llevar a string una variable y .split para separar en un arreglo
                     resultStep1[i]=parseInt(numberInString[0])+ parseInt(numberInString[1])
                
                }
            
                
            }
        } 
        let resultadofinal= 0
        for (let i=0; i<resultStep1.length; i++){
            console.log(resultStep1[i])
            resultadofinal= resultadofinal + parseInt(resultStep1[i])
        
        }
        console.log(resultadofinal)
        if (resultadofinal%10==0){
            return true
        }
        else {
            return false
        }

    }
    else {
        console.log("invalid length")
        return false
    }
}
