// =========================
// MOBILE HAMBURGER MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const triggerPoint = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// ANIMATED COUNTERS
// =========================

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

    const statsSection = document.querySelector(".stats");

    if (!statsSection || countersStarted) return;

    const triggerPoint = window.innerHeight * 0.85;
    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {

        countersStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);
            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 120));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target.toLocaleString();

                } else {

                    counter.textContent = current.toLocaleString();

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active-link");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);