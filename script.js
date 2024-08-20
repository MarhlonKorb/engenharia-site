// Get elements
const signupBtn = document.getElementById('signupBtn');
const signupDialog = document.getElementById('signupDialog');
const closeBtn = document.getElementById('closeBtn');

// Show signup dialog
signupBtn.addEventListener('click', () => {
    signupDialog.style.display = 'flex';
});

// Close signup dialog
closeBtn.addEventListener('click', () => {
    signupDialog.style.display = 'none';
});

// Close dialog when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === signupDialog) {
        signupDialog.style.display = 'none';
    }
});
