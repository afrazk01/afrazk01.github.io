const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

let scrollTicking = false;
function onScroll() {
    const scrolled = window.scrollY;

    if (scrolled > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollProgress) scrollProgress.style.width = (docHeight > 0 ? (scrolled / docHeight) * 100 : 0) + '%';

    let current = '';
    sections.forEach(section => {
        if (scrolled >= section.offsetTop - 120) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });

    scrollTicking = false;
}
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(onScroll);
        scrollTicking = true;
    }
}, { passive: true });

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
const words = ['AI Systems', 'LLM Agents', 'Vision Pipelines', 'RAG Engines', 'Production APIs'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];
    typewriterEl.textContent = currentWord.substring(0, isDeleting ? --charIndex : ++charIndex);

    let delay = isDeleting ? 45 : 90;
    if (!isDeleting && charIndex === currentWord.length) { delay = 1800; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 350; }

    setTimeout(typeWriter, delay);
}
setTimeout(typeWriter, 600);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Array.from(el.parentNode.children).indexOf(el) * 60;
            setTimeout(() => el.classList.add('visible'), delay);
            revealObserver.unobserve(el);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Animated counter for hero stats
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent = target >= 10 ? Math.round(val) : val.toFixed(1).replace('.0','');
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target >= 10 ? target : target;
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// Subtle parallax tilt on cards (desktop only, perf-friendly)
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.tilt').forEach(card => {
        let raf = null;
        card.addEventListener('mousemove', (e) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const r = card.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
                const y = ((e.clientY - r.top) / r.height - 0.5) * -6;
                card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
                raf = null;
            });
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

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
                formStatus.textContent = "Message sent! I'll get back to you soon.";
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

// Skill oscillator — number rises 0→max with emoji change, dips, rises again. Loops.
function emojiFor(v) {
    if (v >= 90) return '🤩';
    if (v >= 70) return '😎';
    if (v >= 45) return '🙂';
    if (v >= 20) return '😶';
    return '😴';
}
document.querySelectorAll('.skill-meter').forEach(meter => {
    const max = parseInt(meter.dataset.max, 10) || 95;
    const numEl = meter.querySelector('.skill-num');
    const emojiEl = meter.querySelector('.skill-emoji');
    const fillEl = meter.querySelector('.skill-bar-fill');
    let running = false;
    let raf = null;

    function animate() {
        let phase = 0; // 0=rising, 1=hold, 2=falling, 3=hold-low
        let val = 0;
        let holdFrames = 0;
        const tick = () => {
            if (phase === 0) {
                val += 0.7 + Math.random() * 0.5;
                if (val >= max) { val = max; phase = 1; holdFrames = 90; }
            } else if (phase === 1) {
                val = max - Math.random() * 1.5;
                if (--holdFrames <= 0) { phase = 2; }
            } else if (phase === 2) {
                val -= 0.9 + Math.random() * 0.6;
                if (val <= 35) { val = Math.max(val, 30); phase = 3; holdFrames = 30; }
            } else {
                val = 30 + Math.random() * 2;
                if (--holdFrames <= 0) { phase = 0; }
            }
            const display = Math.round(val);
            numEl.textContent = display;
            fillEl.style.width = display + '%';
            const newEmoji = emojiFor(display);
            if (emojiEl.textContent !== newEmoji) {
                emojiEl.textContent = newEmoji;
                emojiEl.style.transform = 'scale(1.3) rotate(-8deg)';
                setTimeout(() => { emojiEl.style.transform = ''; }, 200);
            }
            raf = requestAnimationFrame(tick);
        };
        tick();
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && !running) {
                running = true;
                animate();
            } else if (!e.isIntersecting && raf) {
                cancelAnimationFrame(raf);
                raf = null;
                running = false;
            }
        });
    }, { threshold: 0.3 });
    io.observe(meter);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }
    });
});
