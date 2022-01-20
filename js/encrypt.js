

function encryptText() {

    var fetchText = document.getElementById("textInput").value;
    var rawText = fetchText
    var lowercaseText = rawText.toLowerCase();
    var finalEncryptedOutput = document.getElementById("encryptOutput")

    if (lowercaseText == '' || null || 0) {
        alert("Please insert a text.")
    } else {
        var swapWords = lowercaseText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
        encryptedText = swapWords;

        console.log(encryptedText)
    }

    finalEncryptedOutput.value = encryptedText


}

var button = document.getElementById("btn-crypt")
button.onclick = encryptText;