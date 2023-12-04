function converter() {
    let metros, cm
    metros = document.getElementById("metros").value
    cm = parseFloat(metros) * 1000
    document.getElementById("resultado").innerText = "São " + cm + " centímetros" 
}