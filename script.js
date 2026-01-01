const submitBtn = document.getElementById("submit");
const errorMessage = document.getElementById("errorMessage"); 

function validateForm(e) {
    e.preventDefault(); 

   
    errorMessage.classList.remove("error", "correct");
    errorMessage.textContent = "";
    
    
    let emailString = document.getElementById("email").value.trim();
    let passwordString = document.getElementById("password").value;

    const hasLower = /[a-z]/.test(passwordString);
    const hasUpper = /[A-Z]/.test(passwordString);
    const hasNumber = /[0-9]/.test(passwordString);
    const hasSymbol = /[~!@#$%^&*()_+]/.test(passwordString);

    if (emailString === "" || passwordString === "") {
        errorMessage.classList.add("error");
        errorMessage.textContent = "Please fill in all fields.";
    } 
    else if (!emailString.includes("@gmail.com")) {
        errorMessage.classList.add("error");
        errorMessage.textContent = "Please enter a valid @gmail.com email.";
    } 
    else if (passwordString.length < 8 || !hasLower || !hasUpper || !hasNumber || !hasSymbol) {
        errorMessage.classList.add("error");
        errorMessage.textContent = "Password must be 8+ characters with uppercase, lowercase, number, and symbol.";
    } 
    else {
        errorMessage.classList.add("correct");
        errorMessage.textContent = "Signup successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3500);
    }
}

submitBtn.addEventListener("click", validateForm);