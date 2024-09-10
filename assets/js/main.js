document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});

document.getElementById('download-cv').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Log the download action or display a message
    console.log('CV download initiated.');
    // alert('Your CV download will start shortly.');

    // Trigger the download
    const cvLink = document.createElement('a');
    cvLink.href = 'assets/resume/Varia Neel - Resume.pdf';
    cvLink.download = 'Varia Neel - Resume.pdf';
    
    document.body.appendChild(cvLink);
    cvLink.click();
    
    // Clean up by removing the temporary element
    document.body.removeChild(cvLink);
});
