
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script> */}

document.addEventListener("DOMContentLoaded", function () {
    const qrForm = document.getElementById("qrForm");
    const qrText = document.getElementById("qrText");
    const qrSize = document.getElementById("qrSize");
    const qrDarkColor = document.getElementById("qrDarkColor");
    const qrLightColor = document.getElementById("qrLightColor");
    const qrcodeContainer = document.getElementById("qrcode");
    const emptyMessage = document.getElementById("emptyMessage");
    const downloadContainer = document.getElementById("downloadContainer");
    const downloadBtn = document.getElementById("downloadBtn");

    let qrCode;

    // Handle form submission
    qrForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const text = qrText.value.trim();   // Remove leading/trailing spaces
        const size = parseInt(qrSize.value);    // Parse size as integer
        const darkColor = qrDarkColor.value;    // Parse dark color
        const lightColor = qrLightColor.value;  // Parse light color

        if (!text) {    // throw error when input is empty
            alert("Please enter text or URL!");
            return;
        }

        // Clear previous QR code
        qrcodeContainer.innerHTML = "";

        // Generate new QR code
        qrCode = new QRCode(qrcodeContainer, {
            text: text,
            width: size,
            height: size,
            colorDark: darkColor,
            colorLight: lightColor,
            correctLevel: QRCode.CorrectLevel.H
        });

        // Hide empty message and show download button
        emptyMessage.style.display = "none";
        downloadContainer.style.display = "block";
    });

    // Download QR code
    downloadBtn.addEventListener("click", function () {
        if (!qrCode) return;

        const qrImg = qrcodeContainer.querySelector("img") || qrcodeContainer.querySelector("canvas");
        if (!qrImg) return;

        const link = document.createElement("a");
        link.href = qrImg.src || qrImg.toDataURL("image/png");
        link.download = "qr-code.png";
        link.click();
    });
});
