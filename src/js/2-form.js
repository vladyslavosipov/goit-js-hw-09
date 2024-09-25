const userForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input[name="email"]');
const textareaForm = document.querySelector('textarea[name="message"]');

const formData = {
    email: "",
    message: ""
};

window.onload = function() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const checkData = JSON.parse(savedData);
        formData.email = checkData.email || "";
        formData.message = checkData.message || "";
        
        inputForm.value = formData.email;
        textareaForm.value = formData.message;
    }
};

userForm.addEventListener('input', (event) => {
    formData.email = inputForm.value.trim();
    formData.message = textareaForm.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields')
    } else {
        console.log('Submitted data:', formData);
        localStorage.removeItem('feedback-form-state');
        userForm.reset();
    }
});