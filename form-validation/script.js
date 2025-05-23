document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    form.addEventListener("submit", validateForm);
})
// Define a constant for the email pattern
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailError = document.getElementById("email-error");

email.addEventListener("input", () => {
    if (!email.value.match(EMAIL_PATTERN)) {
        // email.setCustomValidity("Please enter a valid email address.");
        email.classList.add("bg-red-50", "border-red-500", "text-red-900", "dark:text-red-400", "placeholder-red-700", "dark:placeholder-red-500", "focus:ring-red-500", "focus:border-red-500", "dark:border-red-500" );
        emailError.innerHTML = '<span class="font-medium text-red-500">Oops!</span> Please enter a valid email address.';
    } else {
        email.classList.add("bg-green-50", "border-green-500", "text-green-900", "dark:text-green-400", "placeholder-green-700", "dark:placeholder-green-500", "focus:ring-green-500", "focus:border-green-500", "dark:border-green-500");
        emailError.innerHTML = '<span class="font-medium">Alright!</span> Username available!';
    }
});




function validateForm(event) {
    event.preventDefault();
    if(email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
    }
    // else if (!email.value.includes("@")) {
    //     alert("Please enter a valid email address.");
    // }
    else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long.");
    }
    else {
        alert("Form submitted successfully!");
    }
}


// const form = document.getElementById("login-form");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// form.addEventListener("submit", validateForm);

// function validateForm(event) {
//     event.preventDefault();
    
//     // reset validation state
//     email.classList.remove("is-invalid");
//     password.classList.remove("is-invalid");

//     let isValid = true;
    
//     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//         email.classList.add("is-invalid");
//         isValid = false;
//     }
    
//     if (!password.value || password.value.length < 8) {
//         password.classList.add("is-invalid");
//         isValid = false;
//     }
    
//     if (isValid) {
//         alert("Form submitted successfully!");
//         form.reset();
//     }
// }