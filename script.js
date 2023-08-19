// Navigation scroll behavior
// Store an array of all sections
const sections = document.querySelectorAll("section");

// Store an array of all nav links
const nav_links = document.querySelectorAll("nav ul li a");

// Store an array of all circle links
const circles = document.querySelectorAll(".circles ul li a");

// Scroll event handler
function nav_color() {
    // How much user scrolled from the top of the page in pixels?
    const from_top = window.scrollY;


    sections.forEach(section => {
        // How much distance each section has from the top of page
        const section_top = section.offsetTop;
        // Section height
        const section_height = section.clientHeight;

        /* If user scrolled from the top more than distance between section from the top. It means user passed
         * top of the section and can clearly see the whole section body. Also user needs to see section on screen
         * and not pass seciion. So we make sure user is still on section by adding from_top <= section_top + section_height
         * to make sure user didn't completely passed the section 
         * */
        if (from_top >= section_top - 100 && from_top <= section_top + section_height) {
            const target_id = section.getAttribute("id");
           
            nav_links.forEach(link => {
                if (link.getAttribute("href") === `#${target_id}`) {
                    link.parentElement.classList.add("active");
                } else {
                    link.parentElement.classList.remove("active");
                }
            });

            circles.forEach(circle_link => {
                if(circle_link.getAttribute("href") === `#${target_id}`) {
                    circle_link.parentElement.classList.add("active");
                } else {
                    circle_link.parentElement.classList.remove("active");
                }
            });
        }
    });
}

// Whenever user scrolls on screen, we should check what section is that user is watching and handle that
window.addEventListener("scroll", nav_color);
