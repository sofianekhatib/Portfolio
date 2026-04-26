// ==========================================
// javaScript.js – Sofiane Khatib Portfolio
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // ---------- DOM ELEMENTS ----------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('contact-form');

    // ---------- MOBILE MENU TOGGLE ----------
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // ---------- NAVBAR BACKGROUND ON SCROLL ----------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark/95', 'shadow-lg');
            navbar.classList.remove('bg-dark/80');
        } else {
            navbar.classList.add('bg-dark/80');
            navbar.classList.remove('bg-dark/95', 'shadow-lg');
        }
    });

    // ---------- CONTACT FORM SUBMISSION ----------
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input, textarea');
            let allFilled = true;
            inputs.forEach(input => {
                if (!input.value.trim()) allFilled = false;
            });

            if (!allFilled) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }

            // Simulate submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi...';

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message envoyé !';
                submitBtn.classList.add('bg-green-600');
                submitBtn.classList.remove('bg-accent', 'hover:bg-accent-dark');

                // Reset form after 2 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.add('bg-accent', 'hover:bg-accent-dark');
                    submitBtn.classList.remove('bg-green-600');
                    submitBtn.disabled = false;
                }, 2500);
            }, 1500);
        });
    }

    // ---------- SMOOTH SCROLL FOR ANCHOR LINKS (redundant with CSS but ensures compatibility) ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});