document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    generateBtn.addEventListener('click', generateQRCode);
    downloadBtn.addEventListener('click', downloadQRCode);

    function generateQRCode() {
        const url = urlInput.value.trim();
        if (url) {
            // Clear previous QR code
            qrcodeDiv.innerHTML = '';

            // Generate QR code
            const qr = qrcode(0, 'L');
            qr.addData(url);
            qr.make();

            // Create image element with larger size
            const img = document.createElement('img');
            img.src = qr.createDataURL(10);
            qrcodeDiv.appendChild(img);

            // Show download button
            downloadBtn.style.display = 'block';
        } else {
            alert('Please enter a valid URL');
        }
    }

    function downloadQRCode() {
        const img = qrcodeDiv.querySelector('img');
        if (img) {
            const link = document.createElement('a');
            link.href = img.src;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
});
