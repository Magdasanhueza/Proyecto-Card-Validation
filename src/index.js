function maskify(numbercard) {
  let numbercardString = numbercard.toString().split("");
  let responseMaskify = [];
  console.log(numbercardString.length - 4);
  for (let i = 0; i < numbercardString.length; i++) {
    if (i >= numbercardString.length - 4) {
      responseMaskify.push(numbercardString[i].toString());
    } else {
      responseMaskify.push("*");
    }
  }
  return responseMaskify;
}

function formulario1() {
  let numbercard = "";
  numbercard = document.getElementById("numbercard").value;
  if (numbercard == "") {
    alert("Ingresa correctamente los 16 números de tu tarjeta");
  } else {
    let result = validateCreditCard(numbercard);
    if (result == true) {
      document.getElementById("pantalla1").style.display = "none";
      let numberCardMaskifyed = maskify(numbercard);
      let maskifyElement = document.getElementById("maskify");
      maskifyElement.innerHTML = numberCardMaskifyed.join("");
      //innerHTML le da el valor al array vacio y Join junta todo el array en string [H,O,L,A]---> HOLA
      document.getElementById("pantalla2").style.display = "block";
    } else {
      document.getElementById("pantalla1").style.display = "none";
      let numberCardMaskifyed = maskify(numbercard);
      let maskifyElement = document.getElementById("maskify2");
      maskifyElement.innerHTML = numberCardMaskifyed.join("");
      document.getElementById("pantalla3").style.display = "block";
    }
  }
}

function validateCreditCard(numbercard) {
  console.log("validating credit card");
  if (numbercard.length == 16) {
    let resultStep1 = [];
    //paso 1 "for" recorrer elementos y multiplicar *2 las posiciones pares
    for (let i = 0; i < numbercard.length; i++) {
      if (i % 2 == 0) {
        //multiplicar *2
        resultStep1[i] = numbercard[i] * 2;
        //el resultado de numbercard x2 este en la misma pisicion de resultstep en
        // parseInt sirve para llevar a numero el string numbercard en la posicion i
      } else {
        resultStep1[i] = numbercard[i];
      }
    }
    for (let i = 0; i < numbercard.length; i++) {
      if (i % 2 == 0) {
        if (resultStep1[i] >= 10) {
          let numberInString = resultStep1[i].toString().split("");
          //toString para llevar a string una variable y .split para separar en un arreglo
          resultStep1[i] =
            parseInt(numberInString[0]) + parseInt(numberInString[1]);
        }
      }
    }
    let resultadofinal = 0;
    for (let i = 0; i < resultStep1.length; i++) {
      resultadofinal = resultadofinal + parseInt(resultStep1[i]);
    }
    if (resultadofinal % 10 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("invalid length");
    return false;
  }
}

function backHome() {
  document.getElementById("numbercard").value = null;
  document.getElementById("pantalla3").style.display = "none";
  document.getElementById("pantalla1").style.display = "block";
}
