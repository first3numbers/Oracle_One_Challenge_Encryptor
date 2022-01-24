

function decryptText() {

    var fetchText = document.getElementById("textInput").value;
    var rawText = fetchText
    var lowercaseText = rawText.toLowerCase();
    var finalDecryptedOutput = document.getElementById("decryptOutput")

    if (lowercaseText == '' || null || 0) {
        alert("Please insert a text.")
    } else {
        var swapWords = lowercaseText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
        encryptedText = swapWords;

        console.log(encryptedText)
    }

    finalDecryptedOutput.value = encryptedText

}

function copyTextOutput() {


    if (encryptedText.value == '' || null || 0) {
        alert("Something went wrong.")
    } else {
        var copyText = document.getElementById("decryptOutput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    }
}

var encryptButton = document.getElementById("btnDecrypt")
var copyButton = document.getElementById("copyText")

encryptButton.onclick = decryptText;
copyButton.onclick = copyTextOutput;