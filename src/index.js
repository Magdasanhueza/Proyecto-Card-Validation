function formulario1() {
    let numbercard = "";
    numbercard = document.getElementById("numbercard").value;
    if (numbercard == "") {
        alert("Ingresa correctamente los 16 números de tu tarjeta")
    }
    else {
        document.getElementById("pantalla1").style.display = "none";
        document.getElementById("pantalla2").style.display = "block";
    }
}
