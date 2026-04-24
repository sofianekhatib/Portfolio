// ==========================================
// javaScript.js – Sofiane Khatib Portfolio
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // ---------- DOM ELEMENTS ----------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
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

    // ---------- CHATBOT TOGGLE ----------
    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener('click', () => {
            const isOpen = chatbotWindow.classList.toggle('open');
            chatbotToggle.classList.toggle('active', isOpen);
            // Change icon if needed (keep comment icon, but we can indicate state)
            if (isOpen) {
                chatbotInput.focus();
            }
        });

        // Close chatbot when clicking outside (optional, but good UX)
        document.addEventListener('click', (e) => {
            if (!chatbotToggle.contains(e.target) && !chatbotWindow.contains(e.target)) {
                chatbotWindow.classList.remove('open');
                chatbotToggle.classList.remove('active');
            }
        });
    }

    // ---------- CHATBOT MESSAGE HANDLING ----------
    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = isUser ? 'msg-user' : 'msg-bot';
        msgDiv.textContent = text;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Simulate typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'msg-bot';
        typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        typingDiv.id = 'typing-indicator';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    // Bot response logic based on keywords
    function getBotResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();

        // Greetings
        if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello') || msg.includes('hi')) {
            return "Bonjour ! 😊 Je suis là pour vous parler du profil de Sofiane Khatib. Que souhaitez-vous savoir ? (compétences, projets, formation, contact)";
        }

        // Skills
        if (msg.includes('compétence') || msg.includes('langage') || msg.includes('technologie') || msg.includes('stack') || msg.includes('sais-tu faire')) {
            return "Sofiane maîtrise plusieurs langages et outils :\n\n🔹 Langages : C, Python, JavaScript, PHP\n🔹 Web : HTML, CSS, React.js, Tailwind\n🔹 Bases de données : MySQL, SQL\n🔹 Analyse : Pandas\n🔹 Outils : Git, GitHub, VS Code, Cisco Packet Tracer\n🔹 Concepts : POO, structures de données, algorithmes, réseaux (OSI, TCP/IP), architecture MVC";
        }

        // Projects
        if (msg.includes('projet') || msg.includes('réalisation') || msg.includes('portfolio') || msg.includes('application')) {
            return "Sofiane a réalisé deux projets notables :\n\n📚 **Gestion de Bibliothèque** : Application web responsive (React.js, Tailwind, PHP) avec recherche, filtrage et inscription en ligne.\n\n🏋️ **Gym Management System** : Application desktop en Python/Tkinter, architecture MVC, POO et gestion de fichiers JSON.";
        }

        // Education
        if (msg.includes('formation') || msg.includes('étude') || msg.includes('diplôme') || msg.includes('bac') || msg.includes('ingénieur')) {
            return "Parcours académique de Sofiane :\n\n🎓 2025-Présent : Cycle Ingénieur en Génie Logiciel et IA (FST Errachidia)\n📘 2022-2025 : DEUST (FST Béni Mellal)\n📐 2021-2022 : Bac Sciences Physiques et Chimie (Option Français)\n\nIl possède également une certification Udemy en Data Analysis with Python (2026).";
        }

        // Contact / Stage
        if (msg.includes('contact') || msg.includes('email') || msg.includes('téléphone') || msg.includes('phone') || msg.includes('joindre') || msg.includes('stage') || msg.includes('disponible')) {
            return "Voici comment contacter Sofiane :\n\n📧 Email : soufianekhatib652@gmail.com\n📞 Téléphone : +212 772817824\n🔗 LinkedIn : /sofiane-khatib\n📍 Localisation : Béni Mellal, Maroc\n\nIl recherche un stage d'initiation pour **juillet 2026** !";
        }

        // Languages
        if (msg.includes('langue') || msg.includes('parle') || msg.includes('arabe') || msg.includes('français') || msg.includes('anglais')) {
            return "Sofiane parle trois langues :\n- Arabe (natif)\n- Français (intermédiaire)\n- Anglais (intermédiaire)";
        }

        // Help / default
        if (msg.includes('aide') || msg.includes('help') || msg.includes('?')) {
            return "Je peux vous renseigner sur :\n• Les compétences techniques\n• Les projets réalisés\n• La formation et les diplômes\n• Les coordonnées et le stage\nTapez simplement un mot-clé !";
        }

        // Fallback
        return "Je n'ai pas bien compris. Essayez de me demander : compétences, projets, formation, contact, ou langues. Tapez 'aide' pour plus d'infos.";
    }

    function sendUserMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        addMessage(message, true);
        chatbotInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Simulate delay and respond
        setTimeout(() => {
            removeTypingIndicator();
            const botReply = getBotResponse(message);
            addMessage(botReply, false);
        }, 800 + Math.random() * 600); // 0.8-1.4s delay
    }

    // Send button click
    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', sendUserMessage);
    }

    // Enter key press
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendUserMessage();
            }
        });
    }

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