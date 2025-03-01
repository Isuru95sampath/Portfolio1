document.addEventListener("DOMContentLoaded", () => {
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

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const imgItems = document.querySelectorAll('.portfolio-carousel .img-item');

let index = 0;
const totalImages = imgItems.length;
const imgWidth = imgItems[0].offsetWidth + 16; // Image width + gap (adjust as needed)

const activePortfolio = () => {
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(${-index * imgWidth}px)`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    }
    );
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < totalImages - 1) {
        index++;
    } else {
        index = 0; // Loop back to first image
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalImages - 1; // Loop back to last image
    }
    activePortfolio();
});

// Resize event listener to adjust width dynamically
window.addEventListener('resize', () => {
    imgWidth = imgItems[0].offsetWidth + 16;
    activePortfolio();
});

