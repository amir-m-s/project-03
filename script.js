// Navigation scroll behavior
const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll("nav ul li a");

function nav_color() {
    const from_top = window.scrollY;

    sections.forEach(section => {
        const section_top = section.offsetTop;
        const section_height = section.clientHeight;

        if (from_top >= section_top - 100 && from_top <= section_top + section_height) {
            const target_id = section.getAttribute("id");
            nav_links.forEach(link => {
                if (link.getAttribute("href") === `#${target_id}`) {
                    link.parentElement.classList.add("active");
                } else {
                    link.parentElement.classList.remove("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", nav_color);
