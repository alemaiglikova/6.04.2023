const loginForm = document.querySelector('form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  fetch('https://6419624875be53f451f2dec2.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(response => response.json())
  .then(data => {
    if (data.id) {
      document.cookie = `user_id=${data.id}`;
      window.location.href = 'profile.html';
    } else {
      alert('Invalid email or password!');
    }
  })
  .catch(error => console.error(error));
});