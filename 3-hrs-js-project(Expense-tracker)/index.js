function handleFormSubmit(event) {
    event.preventDefault();
  
    const description = event.target.description.value;
    const amount = event.target.amount.value;
    const category = event.target.category.value;
    console.log(description+category+amount);
   
    const detail={
       description:description,
       amount:amount,
       category:category
    }
    localStorage.setItem(detail.amount,JSON.stringify(detail));
    showUserONScreeen(detail);
   
  }
  function showUserONScreeen(detail) {
    const parentList = document.getElementById("listItem");
    const listItem = document.createElement("li");
  
    listItem.textContent = `${detail.amount}-${detail.category}-${detail.description}`;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className='btn btn-info btn-sm'
    const space = document.createTextNode("  ");
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className='btn btn-info btn-sm'
  
    deleteBtn.addEventListener("click", function () {
      localStorage.removeItem(detail.amount);
      listItem.remove();
      document.getElementById("amount").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("category").value = "";
    });
  
    editBtn.addEventListener("click", function () {
      let amount = document.getElementById("amount");
      let description = document.getElementById("desc");
      let category = document.getElementById("category");
      console.log("heloooooo"+description.value+category.value+amount.value );
  
  
    
      localStorage.removeItem(amount.value);
      listItem.remove();
    });
    listItem.appendChild(deleteBtn);
    listItem.appendChild(space); // Add space between buttons
    listItem.appendChild(editBtn);
    parentList.appendChild(listItem);
  
    
  }
  function initializePage() {
    // Retrieve items from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let detail = JSON.parse(localStorage.getItem(key));
        showUserONScreeen(detail);
    }
}
initializePage();