// document.addEventListener("DOMContentLoaded", () => {
//     const copyButton = document.getElementById("copy-button");
//     const copyText = document.getElementById("copy-text");
//     copyButton.addEventListener("click", () => {
//         navigator.clipboard.writeText(copyText.innerHTML);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-button");
    const codeSnippet = document.getElementById("code-snippet");
    copyButton.addEventListener("click", () => {
        codeSnippet.select();
        codeSnippet.setSelectionRange(0, 99999);

        try {
            const successful = document.execCommand("copy");
            const msg = successful ? "successful" : "unsuccessful";
            alert("Copied the text: " + msg);
            console.log("Copying text command was " + msg);
        } catch (err) {
            console.log("Oops, unable to copy");
            alert("Oops, unable to copy");
        }
    });
});            
            