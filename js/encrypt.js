function getValue() {
    var originalText = document.getElementById("textInput").value;
    var swapWords = originalText.replace(/e/g, "enter").replace(/i/g, "imes")
    encryptedText = swapWords;
    console.log(encryptedText)

}


var button = document.getElementById("btn-crypt")
button.onclick = getValue;