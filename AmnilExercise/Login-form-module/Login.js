const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
	event.preventDefault(); // prevent form from submitting

	if (usernameInput.value.trim() === '') {
		usernameInput.classList.add('error');
	} else {
		usernameInput.classList.remove('error');
	}

	if (passwordInput.value.trim() === '') {
		passwordInput.classList.add('error');
	} else {
		passwordInput.classList.remove('error');
	}

	if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
		// do login logic here
		alert('Login successful!');
	}
});
