function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userDetails = {
      username: name,
      email: email,
      phone: phone,
    };
    localStorage.setItem(userDetails.email,JSON.stringify(userDetails));
    const unorderList = document.getElementById("listItem"); 
    const list = document.createElement("li"); 
    // list.innerHTML=name+"-"+email+"-"+phone;
 list.textContent = ` ${name} - ${email} - ${phone}`;
unorderList.appendChild(list)
  }

  