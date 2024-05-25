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
    const dlBtn=document.createElement('button')
    dlBtn.textContent='Delete'
    dlBtn.className="dlt-btn"
    list.textContent = ` ${name} - ${email} - ${phone}`;
    list.appendChild(dlBtn)
    unorderList.appendChild(list)
    dlBtn.addEventListener('click',function(event){
        localStorage.removeItem(userDetails.email) 
        list.remove();
    })
  }
  module.exports= handleFormSubmit;