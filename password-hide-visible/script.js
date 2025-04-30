// Get the toggle password button and password field elements
const togglePasswordButton = document.getElementById("togglePassword");
const passwordField = document.getElementById('password');

// Add an event listener to the toggle password button
togglePasswordButton.addEventListener("click", togglePasswordVisibility);

// Function to toggle password visibility
function togglePasswordVisibility() {
  // Get the current type of the password field
  const isPasswordHidden = passwordField.getAttribute("type") === 'password';

  // Toggle the type of the password field
  passwordField.setAttribute("type", isPasswordHidden ? 'text' : 'password');

  // Update the toggle password button's icon
  togglePasswordButton.innerHTML = isPasswordHidden
    ? '<i class="fa-solid fa-eye text-gray-500 cursor-pointer"></i>'
    : '<i class="fa-solid fa-eye-slash text-gray-500 cursor-pointer"></i>';

  // Focus on the password field
  passwordField.focus();
}


// submit form validation

// Get the form element
const form = document.getElementById("login-form");

// Add an event listener to the form's submit event
form.addEventListener("submit", validateForm);

// Function to validate the form
function validateForm(event) {
  // Prevent the form from submitting if any input is empty
  event.preventDefault();
  if (
    document.getElementById("email-address-icon").value === "" ||
    document.getElementById("password").value === ""
  ) {
    alert("Please fill in all fields.");
  }
}