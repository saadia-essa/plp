// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Button click event
    const actionBtn = document.getElementById('action-btn');
    actionBtn.addEventListener('click', () => {
        alert('Button clicked!');
        actionBtn.textContent = 'Clicked!';
    });

    // Color toggle button
    const colorBtn = document.getElementById('color-btn');
    let colorToggle = false;
    colorBtn.addEventListener('click', () => {
        colorToggle = !colorToggle;
        colorBtn.style.backgroundColor = colorToggle ? '#4CAF50' : '#e91e63';
        colorBtn.textContent = colorToggle ? 'Color Changed!' : 'Change My Color';
    });

    // Image gallery
    const galleryImages = document.querySelectorAll('.gallery-image');
    const prevImgBtn = document.getElementById('prev-img');
    const nextImgBtn = document.getElementById('next-img');
    let currentImageIndex = 0;

    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevImgBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(currentImageIndex);
    });

    nextImgBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    });

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === targetTab);
            });
        });
    });

    // Form validation
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formMessage = document.getElementById('form-message');

    function validateEmail(email) {
        // Simple email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateForm() {
        let valid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Password validation
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
            valid = false;
        } else {
            passwordError.textContent = '';
        }

        return valid;
    }

    // Real-time validation feedback
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('input', () => {
        if (validateEmail(emailInput.value.trim())) {
            emailError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length >= 8) {
            passwordError.textContent = '';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            formMessage.style.color = 'green';
            formMessage.textContent = 'Form submitted successfully!';
            form.reset();
        } else {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fix the errors above and try again.';
        }
    });

    // Keypress detection on document
    document.addEventListener('keypress', (e) => {
        console.log(`Key pressed: ${e.key}`);
    });

    // Bonus: double-click on action button to reset text
    actionBtn.addEventListener('dblclick', () => {
        actionBtn.textContent = 'Click Me';
        alert('Button text reset!');
    });

    // Bonus: long press detection on color button
    let pressTimer;
    colorBtn.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            alert('Long press detected!');
        }, 1000);
    });
    colorBtn.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });
    colorBtn.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });
});
