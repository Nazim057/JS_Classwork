const tbody = document.querySelector("tbody");

function dataUser() {
  tbody.innerHTML = "";
  fetch("https://northwind.vercel.app/api/suppliers")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((supplier) => {
        tbody.innerHTML += `
      <tr>
        <td>${supplier.id}</td>
        <td>${supplier.companyName}</td>
        <td>${supplier.address?.city}</td>
        <td>${supplier.address?.country}</td>
        <td>${supplier.address?.phone}</td>
        <td><button class="btn btn-danger my-2" id="delBtnId${supplier.id}" onclick=deleteUser(${supplier.id}) > Delete </button></td>
        <td><button class="btn btn-success my-2" id="editBtnId${supplier.id}" onclick=editUser(${supplier.id}) > Edit </button></td>
        <td><button class="btn btn-warning my-2" id="infoBtnId${supplier.id}" onclick=infoUser(${supplier.id}) > Info User </button></td>
      </tr>
      `;
      });
    })
    .catch((error) => console.log(error));
}
dataUser();

function deleteUser(id) {
  sec1.classList.remove('sec1Height');
  fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
    method: "DELETE",
  }).then(() => {
    dataUser();
  }).catch((error) => console.log(error));

  form.reset();
  // document.querySelector(`#delBtnId${id}`).closest("tr").remove();
}

let editStatus = false;
let editId = null;

const form = document.querySelector("form");
const inputCompanyName = document.querySelector("#inputCompanyName");
const inputContactName = document.querySelector("#inputContactName");
const inputContactTitle = document.querySelector("#inputContactTitle");
const inputStreet = document.querySelector("#inputStreet");
const inputCity = document.querySelector("#inputCity");
const inputRegion = document.querySelector("#inputRegion");
const inputPostalCode = document.querySelector("#inputPostalCode");
const inputCountry = document.querySelector("#inputCountry");
const inputPhone = document.querySelector("#inputPhone");
const addBtn = document.querySelector(".addBtn");

const sec1 = document.querySelector(".sec1");

form.addEventListener("submit", function (event) {
  sec1.classList.remove('sec1Height');
  event.preventDefault();
  let obj = {
    companyName: inputCompanyName.value,
    contactName: inputContactName.value,
    contactTitle: inputContactTitle.value,
    address: {
      street: inputStreet?.value,
      city: inputCity?.value,
      region: inputRegion?.value,
      postalCode: inputPostalCode?.value,
      country: inputCountry?.value,
      phone: inputPhone?.value,
    },
  };

  if (!editStatus) {
    fetch("https://northwind.vercel.app/api/suppliers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      dataUser();
    }).catch((error) => console.log(error));

  } else {
    fetch(`https://northwind.vercel.app/api/suppliers/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      dataUser();
    }).catch((error) => console.log(error));

    editStatus = false;
    addBtn.innerText = "Add";
    addBtn.style.backgroundColor = "blue";
  }

  form.reset();
});

function editUser(id) {
  sec1.classList.add('sec1Height');
  editId = id;
  editStatus = true;
  addBtn.innerText = "Save";
  addBtn.style.backgroundColor = "green"; 
  fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then((response) => response.json())
    .then((data) => {
      inputCompanyName.value = data.companyName;
      inputContactName.value = data.contactName;
      inputContactTitle.value = data.contactTitle;
      inputStreet.value = data.address.street;
      inputCity.value = data.address.city;
      inputRegion.value = data.address.region;
      inputPostalCode.value = data.address.postalCode;
      inputCountry.value = data.address.country;
      inputPhone.value = data.address.phone;
    }).catch((error) => console.log(error));
}




const newUserBtn = document.querySelector(".newUserBtn");

newUserBtn.addEventListener("click", function () {
  sec1.classList.toggle('sec1Height');
})

//////////////////////////////////////////////////////////////////////

const alertDiv = document.querySelector("#alertDiv");
const span = document.querySelectorAll("span");
const delAlertBtn = document.querySelector("#delAlertBtn");

function infoUser(id) {
  alertDiv.style.display = "block"
  fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then((response) => response.json())
    .then((data) => {
      span[0].innerText = "CompanyName:  " + data.companyName;
      span[1].innerText = "ContactName:  " + data.contactName;
      span[2].innerText = "ContactTitle:  " + data.contactTitle;
      span[3].innerText = "Street:  " + data.address.street;
      span[4].innerText = "City:  " + data.address.city;
      span[5].innerText = "Region:  " + data.address.region;
      span[6].innerText = "PostalCode:  " + data.address.postalCode;
      span[7].innerText = "Country:  " + data.address.country;
      span[8].innerText = "Phone:  " + data.address.phone;
    }).catch((error) => console.log(error));
}

delAlertBtn.addEventListener("click", function () {
  alertDiv.style.display = "none";
})
