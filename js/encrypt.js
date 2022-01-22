

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

function copyTextOutput() {

    if (encryptedText.value == '' || null || 0) {
        alert("Something went wrong.")
    } else {
        var copyText = document.getElementById("encryptOutput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    }

}

var encryptButton = document.getElementById("btnCrypt")
var copyButton = document.getElementById("copyText")

encryptButton.onclick = encryptText;
copyButton.onclick = copyTextOutput;