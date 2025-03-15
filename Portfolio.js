document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header nav a");
    const logoLink = document.querySelector(".logo");
    const sections = document.querySelectorAll("section");
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
    const imgItems = document.querySelectorAll(".portfolio-carousel .img-item");
    const portfolioDetails = document.querySelectorAll(".portfolio-details");

    let index = 0;
    let imgWidth = imgItems.length > 0 ? imgItems[0].offsetWidth : 300;

    // Function to reset active states
    const activePage = () => {
        const barsBox = document.querySelector(".bars-box");
        navLinks.forEach((link) => link.classList.remove("active"));
        sections.forEach((section) => section.classList.remove("active"));
        if (barsBox) {
            barsBox.classList.remove("active");
            setTimeout(() => {
                barsBox.classList.add("active");
            }, 900);
        }
    };

    // Function to reset the portfolio slider
    const resetPortfolioSlider = () => {
        index = 0;
        imgWidth = imgItems.length > 0 ? imgItems[0].offsetWidth : 300;
        if (imgSlide) {
            imgSlide.style.transform = `translateX(0px)`;
        }
        portfolioDetails.forEach((detail) => detail.classList.remove("active"));
        if (portfolioDetails[index]) {
            portfolioDetails[index].classList.add("active");
        }
    };

    // Navbar click event for smooth scrolling
    navLinks.forEach((link, idx) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents default link behavior

            if (!link.classList.contains("active")) {
                activePage();
                link.classList.add("active");

                setTimeout(() => {
                    sections[idx].classList.add("active");
                    resetPortfolioSlider();
                    window.scrollTo({ top: sections[idx].offsetTop, behavior: "smooth" });
                }, 900);
            }
        });
    });

    // Logo click event to go back to the home section
    if (logoLink) {
        logoLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevents default link behavior
            if (!navLinks[0].classList.contains("active")) {
                activePage();
                navLinks[0].classList.add("active");

                setTimeout(() => {
                    sections[0].classList.add("active");
                    resetPortfolioSlider();
                    window.scrollTo({ top: sections[0].offsetTop, behavior: "smooth" });
                }, 900);
            }
        });
    }

    // Portfolio slider controls
    const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
    const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

    const activePortfolio = () => {
        if (imgItems.length === 0) return;
        imgWidth = imgItems[0].offsetWidth;
        if (imgSlide) {
            imgSlide.style.transform = `translateX(${-index * imgWidth}px)`;
        }
        portfolioDetails.forEach((detail) => detail.classList.remove("active"));
        if (portfolioDetails[index]) {
            portfolioDetails[index].classList.add("active");
        }
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
