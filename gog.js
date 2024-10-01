
document.addEventListener('DOMContentLoaded', function () {
    const projectSection = document.getElementById('projects');
    const projectItems = document.querySelectorAll('.project-item');
    
    function handleScroll() {
        const triggerPoint = window.innerHeight * 0.75;
        
        // Check if the projects section is in view
        const sectionTop = projectSection.getBoundingClientRect().top;
        const sectionHeight = projectSection.offsetHeight;
        
        if (sectionTop < triggerPoint && sectionTop + sectionHeight > 0) {
            projectSection.classList.add('dark-mode');
        } else {
            projectSection.classList.remove('dark-mode');
        }
        
        // Show project items
        projectItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerPoint) {
                item.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Show/Hide back-to-top button on scroll
window.onscroll = function () {
    const footerIcon = document.getElementById('footer-icon');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        footerIcon.classList.add('show');
    } else {
        footerIcon.classList.remove('show');
    }
};


