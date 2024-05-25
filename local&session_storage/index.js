function handleFormSubmit(event){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Store user details in local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);

}