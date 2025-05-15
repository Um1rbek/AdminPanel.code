const API = `https://fakestoreapi.com/products`;
const elTable = document.querySelector(".pro-body");
const elAddBtn = document.querySelector("#userForm")
const elFormCon = document.querySelector(".form-container")
const elTableForm = document.querySelector(".input-table")

function getPro(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            showData(data);
        })

}

getPro(API);


const addNewUser = document.querySelector(".add_btn");
const userForm = document.querySelector("#product-form");
const formContainer = document.querySelector(".form-container"); // Bu box

// SHOW DATA
function showData(products) {
  elTable.innerHTML = ""; // har safar tozalab chiqadi
  products.map((item) => {
    elTable.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}$</td>
        <td><img width="40" height="40" src="${item.image}" alt="${item.title}" /></td>
        <td>${item.category}</td>
        <td><button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button></td>
        <td><button class="update-btn" onclick="updateItem(${item.id})">Update</button></td>
      </tr>
    `;
  });
}

// DELETE ITEM
function deleteItem(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      alert('Successfully deleted item');
      location.reload(); // O'chirgandan keyin sahifani yangilaydi
    })
    .catch(err => console.error('Error deleting:', err));
}

// ADD NEW PRODUCT
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = userForm["title"].value;
  const price = parseFloat(userForm["price"].value);
  const category = userForm["category"].value;
  const description = userForm["description"].value;
  const image = userForm["image"].value; // bu url bo'lgani uchun value olamiz

  const product = {
    title,
    price,
    category,
    description,
    image
  };

  fetch(`https://fakestoreapi.com/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Successfully added item!");
        userForm.reset(); // formani tozalash
      } else {
        console.error("Error adding product");
      }
    })
    .catch(err => console.error("Fetch error:", err));
});

// Optional: updateItem() function hohlasang qo‘shib beraman!


  





