
function errorMessage() {
    alert("Por favor, insira um texto")
}

function encryptText() {

    var originalText = document.getElementById("textInput").value;
    var RawText = originalText

    if (RawText == '' || null || 0) {
        alert("Por favor, insira um texto")
    } else {
        var swapWords = RawText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
        encryptedText = swapWords;

        console.log(encryptedText)
    }

}

var button = document.getElementById("btn-crypt")
button.onclick = encryptText;