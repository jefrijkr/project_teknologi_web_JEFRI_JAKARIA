document.addEventListener("DOMContentLoaded", function() {
    let images = [
        "parfum1.jpg",
        "parfum2.jpg",
        "parfum3.jpg"
    ];
    let currentIndex = 0;
    let carouselImage = document.getElementById("carouselImage");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    
    function updateImage(index) {
        carouselImage.src = images[index];
    }
    
    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    });
    
    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    });
});
 
 document.getElementById("produk").addEventListener("change", function() {
    let produk = document.getElementById("produk").value;
    let produkImage = document.getElementById("produkImage");
    
    let images = {
        "Parfum A": "parfum1.jpg",
        "Parfum B": "parfum2.jpg",
        "Parfum C": "parfum3.jpg"
    };
    
    if (images[produk]) {
        produkImage.src = images[produk];
        produkImage.style.display = "block";
    } else {
        produkImage.style.display = "none";
    }
});

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let produk = document.getElementById("produk").value;
    
    document.getElementById("orderResult").innerText = `Terima kasih, ${nama}! Pesanan Anda untuk ${produk} akan segera dikirim ke ${alamat}.`;
});