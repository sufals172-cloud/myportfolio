

document.addEventListener("DOMContentLoaded", () => {
    // Back-to-top button
     const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.id = "backToTop";
     topButton.setAttribute("aria-label", "Back to top");
    
    // Button styles 
    Object.assign(topButton.style, {
        position: "fixed",
        bottom: "25px",
        right: "25px",
        display: "none",
        padding: "10px 16px",
        background: "#111827",
        color: "#38bdf8",
        border: "1px solid #38bdf8",
        borderRadius: "8px",
        fontSize: "24px",
        cursor: "pointer",
        zIndex: "999"
    });

    document.body.appendChild(topButton);

    // Show button after scrolling
    window.addEventListener("scroll", () => {
        topButton.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    // Scroll to the top when clicked
    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 2. Clickable skills
    const skills = document.querySelectorAll(".skill");

    skills.forEach((skill) => {
        skill.addEventListener("click", () => {
            alert("You selected: " + skill.textContent.trim());
        });

        skill.style.cursor = "pointer";
    });

    // 3. Navigation click events
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(
                    null,
                    "",
                    link.getAttribute("href")
                );
            }
        });
    });



   // for typing effect
   // Typing animation
const typingElement = document.querySelector("#typing");

if (typingElement) {
const roles = [
"Aspiring MERN Stack Developer",
"C++ Developer",
"Backend Developer",
"Full Stack Web Developer"
];


let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentRole.substring(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();


}





// ================================
// Contact Section: Copy Email
// ================================

const copyEmailBtn = document.querySelector("#copyEmailBtn");

if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
        const email = "sufals172@gmail.com";

        try {
            await navigator.clipboard.writeText(email);

            copyEmailBtn.textContent = "Copied Successfully! ✓";
            copyEmailBtn.disabled = true;

            setTimeout(() => {
                copyEmailBtn.textContent = "Copy Email";
                copyEmailBtn.disabled = false;
            }, 2000);

        } catch (error) {
            window.prompt("Copy this email address:", email);
        }
    });
}
 

});