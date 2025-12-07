const uploadInput = document.getElementById('uploadImage');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');

uploadInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            // 1. Tentukan ukuran Canvas (misal tambah border 10%)
            const borderSize = 50; 
            canvas.width = img.width + (borderSize * 2);
            canvas.height = img.height + (borderSize * 2);

            // 2. Warnai background jadi Putih
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 3. Gambar foto user di tengah-tengah
            ctx.drawImage(img, borderSize, borderSize);

            // 4. Munculkan tombol download
            downloadBtn.style.display = 'inline-block';
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
});

// Fungsi Download
downloadBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'instagram-border.png';
    link.href = canvas.toDataURL();
    link.click();
});