function calcularsoma() {
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    var soma = parseInt(numero1) + parseInt(numero2)
    document.getElementById('resultado').innerHTML = 'A soma é: ' + soma
}