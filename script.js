// ==========================
// MOBILE MENU TOGGLE
// ==========================

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// INTRO TEXT (WITH BLUE NAME)
// ==========================

const introElement = document.getElementById("intro-text");

const part1 = "Hi, I'm ";
const name = "Muhammad Soban Sarmad";

let i = 0;
let j = 0;

// Type "Hi, I'm "
function typePart1() {
    if (i < part1.length) {
        introElement.innerHTML += part1.charAt(i);
        i++;
        setTimeout(typePart1, 80);
    } else {
        typeName();
    }
}

// Type name in blue
function typeName() {
    if (j < name.length) {
        introElement.innerHTML =
            part1 +
            "<span class='name'>" +
            name.substring(0, j + 1) +
            "</span>";
        j++;
        setTimeout(typeName, 80);
    } else {
        setTimeout(startTyping, 800);
    }
}

// ==========================
// TYPING ROLES (LOOP)
// ==========================
const textArray = [
    "AI Engineer",
    "Application Developer",
    "Python Engineer",
    "UI/UX Designer",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Expert",
    "System Developer",
    "Tech Innovator",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

function startTyping() {
    type();
}

// ==========================
// SCROLL ANIMATION (SECTIONS)
// ==========================
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show");
        }
    });
});

// ==========================
// START EVERYTHING
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    typePart1();
});

// ==========================
// EDUCATION SCROLL ANIMATION
// ==========================

const cards = document.querySelectorAll(".education-card");

function revealCards() {
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// ==========================
// SKILLS SCROLL ANIMATION
// ==========================

const skillCards = document.querySelectorAll(".skill-card");

function isInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
}

window.addEventListener("scroll", () => {
    skillCards.forEach(card => {
        if (isInView(card)) {
            card.classList.add("show");
        } else {
            card.classList.remove("show");
        }
    });
});

// ==========================
// SHOW MORE / LESS
// ==========================

const toggleBtn = document.getElementById("toggleSkills");
let expanded = false;

// hide after 6
skillCards.forEach((card, index) => {
    if (index >= 6) {
        card.classList.add("hidden");
    }
});

toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    skillCards.forEach((card, index) => {
        if (index >= 6) {
            card.classList.toggle("hidden");
        }
    });

    toggleBtn.textContent = expanded ? "Show Less" : "Show More";
});


// ==========================
// PROJECTS SCROLL ANIMATION + READ MORE TOGGLE
// ==========================

const projectItems = document.querySelectorAll(".project-media, .project-text");

function isInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
}

window.addEventListener("scroll", () => {

    projectItems.forEach(item => {
        if (isInView(item)) {
            item.classList.add("show");
        } else {
            item.classList.remove("show"); // replay animation
        }
    });

});

document.querySelectorAll(".read-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const text = this.parentElement;

        text.classList.toggle("active");

        if (text.classList.contains("active")) {
            this.innerText = "See Less";
        } else {
            this.innerText = "See More";
        }
    });
});


const rows = document.querySelectorAll(".project-row");

function animateRows() {
    rows.forEach(row => {
        const rect = row.getBoundingClientRect();

        const isVisible = rect.top < window.innerHeight - 120 && rect.bottom > 100;

        if (isVisible) {
            row.classList.add("show");
            row.classList.remove("hide");
        } else {
            row.classList.remove("show");
            row.classList.add("hide");
        }
    });
}

window.addEventListener("scroll", animateRows);
window.addEventListener("load", animateRows);

// Project Repository Links (Replace URLs with actual repo links)
// Project 1
function openRepo_1() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/Face-Recognition-Attendance-System", "_blank");
}

// Project 2
function openRepo_2() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/Real-Estate-Plot-Price-Prediction", "_blank");
}

// Project 3
function openRepo_3() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/AI-Text-Based-Interviewer", "_blank");
}

// Project 4
function openRepo_4() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/Fire-Detection", "_blank");
}


// ==========================
// TESTIMONIALS SCROLL ANIMATION
// ==========================

window.addEventListener("DOMContentLoaded", () => {

    const testimonials = [
        {
            text: "Amazing developer with strong AI and Python skills. Delivered project on time!",
            name: "— Ahmed Raza"
        },
        {
            text: "Great work on web application development. Very professional and creative.",
            name: "— Sara Khan"
        },
        {
            text: "Excellent understanding of machine learning and face recognition systems.",
            name: "— Ali Ahmed"
        },
        {
            text: "Very skilled in Kivy and desktop app development. Highly recommended!",
            name: "— Usman Tariq"
        },
        
        {
            text: "Outstanding UI/UX design skills. Created a beautiful and user-friendly interface.",
            name: "— Fatima Noor"
        }
    ];

    let index = 0; // 👈 ONLY DECLARED ONCE HERE

    const quote = document.querySelector(".quote");
    const nameEl = document.querySelector(".name");
    const box = document.querySelector(".testimonial-box");

    function changeTestimonial() {

        if (!quote || !nameEl || !box) return;

        box.classList.add("fade");

        setTimeout(() => {

            index = (index + 1) % testimonials.length;

            quote.textContent = testimonials[index].text;
            nameEl.textContent = testimonials[index].name;

            box.classList.remove("fade");

        }, 300);
    }

    setInterval(changeTestimonial, 5000);
});

/*

// OPEN POPUP
function openReviewPopup() {
    document.getElementById("popup").style.display = "flex";
}

// CLOSE POPUP
function closeReviewPopup() {
    document.getElementById("popup").style.display = "none";
}

// SUBMIT REVIEW
function submitReview() {

    const name = document.getElementById("reviewName").value.trim();
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !text) {
        alert("Please fill all fields");
        return;
    }

    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial-box");

    testimonial.innerHTML = `
        <p class="quote">"${text}"</p>
        <h3 class="name">— ${name}</h3>
    `;

    const container = document.querySelector(".testimonials-container");

    // 👉 ADD NEW REVIEW (APPEND as you asked)
    container.appendChild(testimonial);

    // 👉 START HIDDEN FOR ANIMATION
    testimonial.classList.add("fade");

    // force reflow (important for animation restart)
    void testimonial.offsetWidth;

    // 👉 SHOW WITH ANIMATION
    setTimeout(() => {
        testimonial.classList.remove("fade");
    }, 50);

    // CLEAR INPUTS
    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";

    // CLOSE POPUP
    closeReviewPopup();
}

*/

// ==========================
// SERVICES SCROLL ANIMATION
// ==========================

const serviceCards = document.querySelectorAll(".service-card");

function animateServices() {

    serviceCards.forEach(card => {

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // ENTER VIEW
        if (rect.top < windowHeight - 100 && rect.bottom > 100) {
            card.classList.add("show");
            card.classList.remove("hide");
        }

        // EXIT VIEW (scrolling up or down)
        else {
            card.classList.remove("show");
            card.classList.add("hide");
        }
    });
}

window.addEventListener("scroll", animateServices);
window.addEventListener("load", animateServices);

// ==========================
// CONTACT & PROJECTS SCROLL ANIMATION
// ==========================

const contactCards = document.querySelectorAll(".contact-card");

function isInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
}

window.addEventListener("scroll", () => {
    contactCards.forEach(card => {
        if (isInView(card)) {
            card.classList.add("show");
        } else {
            card.classList.remove("show");
        }
    });
});