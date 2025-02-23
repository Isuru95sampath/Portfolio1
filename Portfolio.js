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