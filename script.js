window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
    }, 800);
});

const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / docHeight) * 100;
    scrollProgress.style.width = progress + '%';

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrolled >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const typewriterEl = document.getElementById('typewriter');
const words = ['AI Systems', 'ML Models', 'Neural Networks', 'Smart Agents', 'LLM Apps'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeWriter, delay);
}

setTimeout(typeWriter, 1200);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Array.from(el.parentNode.children).indexOf(el) * 80;
            setTimeout(() => el.classList.add('visible'), delay);
            revealObserver.unobserve(el);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        formStatus.className = 'form-status';
        formStatus.textContent = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !subject || !message) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please fill in all fields.';
            return;
        }
        if (!emailRe.test(email) || email.length > 120) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please enter a valid email address.';
            return;
        }

        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Message sent! I\'ll get back to you soon.';
                form.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (err) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Something went wrong. Please email me directly at afrazkhan1407@gmail.com.';
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const top = target.offsetTop - 70;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
