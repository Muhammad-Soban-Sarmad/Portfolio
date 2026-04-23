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

// Project 5
function openRepo_5() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/Portfolio", "_blank");
}

// Project 6
function openRepo_6() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/AI-Application-Tracking-System-ATS-", "_blank");
}

// Project 7
function openRepo_7() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/", "_blank");
}

// Project 8
function openRepo_8() {
    window.open("https://github.com/Muhammad-Soban-Sarmad/Image-Video-Compressor", "_blank");
}