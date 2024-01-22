function saveName() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;

    if (firstName.trim() === "" || lastName.trim() === "") {
        document.getElementById('error-msg').textContent = "Please enter both first name and last name.";
        return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    window.location.href = '2.Vid.html';
}
