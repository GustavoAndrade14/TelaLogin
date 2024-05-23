const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



// Function to clear form fields
function clearForms() {
    // Clearing sign up form fields
    const nameSignUp = document.getElementById('nameSignUp');
    const emailSignUp = document.getElementById('emailSignUp');
    const passwordSignUp = document.getElementById('passwordSignUp');

    // Clearing sign in form fields
    const emailSignIn = document.getElementById('emailSignIn');
    const passwordSignIn = document.getElementById('passwordSignIn');

    // Clearing fields
    nameSignUp.value = '';
    emailSignUp.value = '';
    passwordSignUp.value = '';
    emailSignIn.value = '';
    passwordSignIn.value = '';
}