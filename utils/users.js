const API = `https://jsonplaceholder.typicode.com/users`;
const Table = document.querySelector(".user-table");
const userTableBody = document.querySelector('.user-body')

function getUsers(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            showUsers(data);
        })

}

getUsers(API);



function showUsers(users) {

    users.map((item, index) => {
        userTableBody.innerHTML += `

        
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.username}</td>
            <td><span class="status ${item.status}</span></td> 
            <td>
                <button class="edit-btn" onclick="editUser(${item.id})">Edit</button> 
                <button class="delete-btn" onclick="userDeletedItem(${item.id})">Delete</button>
            </td>
        </tr>

`
    })




}



function userDeletedItem(id) {
    fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => alert("good"));


}


// add new user 

const addNewUser = document.querySelector(".add-user-btn")
const deleted = document.querySelector(".deleted")
const box = document.querySelector(".form-container")



const userForm = document.querySelector("#userForm")
// const usergroup = document.querySelector("form-group")



addNewUser.addEventListener("click", (e) => {
    e.preventDefault();
    userForm.className="";
})



userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const id = userForm["id"].value;
  const username = userForm["username"].value;
  const password = userForm["password"].value;
  const email = userForm["email"].value;
  
  const user = {
    id: id,
    username: username,
    email: email,
    password: password
  };

  
  
  fetch(`https://fakestoreapi.com/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Successfully added user"); // grammatikani to'g'irlash
        userForm.classList.add("hidden");
      } else {
        console.log("Error adding user");
      }
    })

});


//edit

function editUser(id){
  
}
// const editForm = document.getElementById('editForm');


// const editBtn = document.querySelector(".edit-btn")
// const editBox = document.querySelector(".modal-content")

// editBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   editBox.className="";
  
// fetch(`https://fakestoreapi.com/users/${id}`, {
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(user)
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

// })



