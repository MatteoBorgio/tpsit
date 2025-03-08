
const parametri = new URLSearchParams(window.location.search);
const username = parametri.get('username');
const email = parametri.get('email');
const password = parametri.get('password');

document.getElementById("output").innerHTML = `<p>Username: ${username}</p> <p>Email: ${email}</p> <p>Password: ${password}</p>`;
