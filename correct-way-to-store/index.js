function handleFormSubmit(event) {
    event.preventDefault();
 const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const UsersDetails = {
        username: username,
        email: email,
        phone: phone
    };
    const obj=JSON.stringify(UsersDetails);
    localStorage.setItem("User Details", obj);

    console.log(JSON.parse(obj));
  }