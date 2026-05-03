// Navigasi Berubah Warna
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? 'rgba(74, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.7)';
});

// Efek Muncul Saat Scroll
const revealElements = document.querySelectorAll('.glass-card, .program-detail, .content-box');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s ease-out";
    observer.observe(el);
});
