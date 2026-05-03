// 1. Efek Navigasi Transparan ke Solid saat Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
});

// 2. Smooth Scrolling untuk Menu Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Efek Muncul (Reveal) saat Scroll untuk Program Kerja
// Cocok untuk menampilkan pilar Pendidikan & Kemanusiaan secara dramatis
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.misi-card').forEach(card => {
    observer.observe(card);
});

// 4. Pesan Sambutan Otomatis di Konsol Browser
console.log("Selamat Datang di Website LENTRA - Langkah Emas Nusantara");
console.log("Mewujudkan Indonesia Emas 2045 melalui aksi nyata pemuda.");
