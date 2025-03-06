document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('header nav a');
    const logoLink = document.querySelector('.logo');

    const activePage =() =>{
        navLinks.forEach(link => {
                link.classList.remove('active');
            
        });
    }

    navLinks.forEach((link, idx) => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('active')) {
                activePage();

                link.classList.add('active');
            }
        });
    });

    logoLink.addEventListener('click', () => {
        if(!navLinks[0].classList.contains('active')){
            activePage();
            navLinks[0].classList.add('active');
        }
    }); 



    const resumeBtns = document.querySelectorAll(".resume-btn");
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            resumeBtns.forEach(button => {
                button.classList.remove("active");
            });

            // Add 'active' class to the clicked button
            btn.classList.add("active");

            // Remove 'active' class from all details
            resumeDetails.forEach(detail => {
                detail.classList.remove("active");
            });

            // Add 'active' class to the corresponding detail
            resumeDetails[idx].classList.add('active');
        });
    });
});


//   portfolio eke images tika navigations

// Select necessary elements
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const imgItems = document.querySelectorAll('.portfolio-carousel .img-item');
const portfolioDetails = document.querySelectorAll('.portfolio-details');

let index = 0;
let imgWidth = imgItems.length > 0 ? imgItems[0].offsetWidth : 300; // Default width if no images
const totalImages = imgItems.length;

// Function to Update Slider
const activePortfolio = () => {
    if (imgItems.length === 0) return; // Avoid errors if no images exist

    imgWidth = imgItems[0].offsetWidth; // Dynamically update width
    imgSlide.style.transform = `translateX(${-index * imgWidth}px)`;

    // Update Portfolio Details
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('active');
    }
};

// Handle Right Arrow Click
arrowRight?.addEventListener('click', () => {
    index = (index + 1) % totalImages; // Loop to first image after last
    activePortfolio();
});

// Handle Left Arrow Click
arrowLeft?.addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages; // Loop to last image before first
    activePortfolio();
});

// Update Image Width on Resize
window.addEventListener('resize', () => {
    activePortfolio(); // Ensure correct positioning after resize
});

// Initialize on Load
activePortfolio();
