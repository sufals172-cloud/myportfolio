

document.addEventListener("DOMContentLoaded", () => {
    // 1. Back-to-top button
    const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.id = "backToTop";
    topButton.setAttribute("aria-label", "Back to top");

    // Keep the existing theme
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
});