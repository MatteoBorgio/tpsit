
function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("userPassword").value;
    const email = document.getElementById("userEmail").value;
    const textarea = document.getElementById("userTextarea").value;
    const nationality = document.getElementById("userNationality").value;
    if (!username || !password || !email || nationality === "Select your nationality") {
        alert("Please enter all required fields.");
    }
    else {
        document.getElementById("output").innerHTML = `Username: ${username} Password: ${password} Email: ${email} Nationality: ${nationality} About you: ${textarea}`;
    }
}
