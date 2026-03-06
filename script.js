// 1. Smooth Scrolling for Navigation
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Active class change
        document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// 2. Copy to Clipboard Functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.previousElementSibling.innerText;
        navigator.clipboard.writeText(code);
        button.innerText = "Copied!";
        setTimeout(() => button.innerText = "Copy", 2000);
    });
});