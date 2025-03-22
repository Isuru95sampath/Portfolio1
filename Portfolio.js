document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav a");
    const logoLink = document.querySelector(".logo");
    const resumeBtns =document.querySelectorAll('.resume-btn');
    const sections = document.querySelectorAll("section");
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
    const imgItems = document.querySelectorAll(".portfolio-carousel .img-item");
    const portfolioDetails = document.querySelectorAll(".portfolio-details");
    const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
    const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

    let index = 0;
    let imgWidth = imgItems.length > 0 ? imgItems[0].offsetWidth : 300;


    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const resumeDetailes = document.querySelectorAll('.resume-detail');
            resumeBtns.forEach(btn =>{
                btn.classList.remove('active');
            });
            btn.classList.add('active');

            resumeDetailes.forEach(detail =>{
                detail.classList.remove('active');
            });

            resumeDetailes[idx].classList.add('active');
       });
    });


    // Function to activate only the clicked section with animation
    const activateSection = (index) => {
        sections.forEach((section, idx) => {
            if (idx === index) {
                section.classList.add("active", "fade-in"); // Add animation
            } else {
                section.classList.remove("active", "fade-in");
            }
        });
    };

    // Navbar click event for smooth scrolling and animation
    navLinks.forEach((link, idx) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents default link behavior

            if (!link.classList.contains("active")) {
                navLinks.forEach((lnk) => lnk.classList.remove("active"));
                link.classList.add("active");

                // Smooth scroll to section
                window.scrollTo({ top: sections[idx].offsetTop, behavior: "smooth" });

                // Activate only the targeted section with animation
                activateSection(idx);
            }
        });
    });
    

    // Automatically detect which section is in view and update the active link
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                navLinks.forEach((lnk) => lnk.classList.remove("active"));
                navLinks[index].classList.add("active");
                activateSection(index);
            }
        });
    }, { threshold: 0.6 });

    sections.forEach((section) => observer.observe(section));

    // Logo click event to go back to the home section
    if (logoLink) {
        logoLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents default link behavior
            if (!navLinks[0].classList.contains("active")) {
                navLinks.forEach((lnk) => lnk.classList.remove("active"));
                navLinks[0].classList.add("active");

                window.scrollTo({ top: sections[0].offsetTop, behavior: "smooth" });
                activateSection(0);
            }
        });
    }

    // Portfolio slider functions
    const activePortfolio = () => {
        if (imgItems.length === 0) return;
        imgWidth = imgItems[0].offsetWidth;
        if (imgSlide) {
            imgSlide.style.transform = `translateX(${-index * imgWidth}px)`;
        }
        portfolioDetails.forEach((detail, i) => {
            detail.classList.toggle("active", i === index);
        });
    };

    if (arrowRight) {
        arrowRight.addEventListener("click", () => {
            index = (index + 1) % imgItems.length;
            activePortfolio();
        });
    }

    if (arrowLeft) {
        arrowLeft.addEventListener("click", () => {
            index = (index - 1 + imgItems.length) % imgItems.length;
            activePortfolio();
        });
    }

    window.addEventListener("resize", activePortfolio);
    activePortfolio();
});
