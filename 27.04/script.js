const name1 = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const checkbox = document.querySelector("#checkbox");
const check = document.querySelector("#check");
const input = document.querySelectorAll(".input");

//////////////////////////////////// name1
name1.addEventListener("focus", () => {
  name1.style.background = "rgba(0, 0, 0, 0.47)";
  name1.style.color = "White";
});
name1.addEventListener("mouseout", () => {
  name1.style.background = "transparent";
  name1.style.color = "transparent";
});

//////////////////////////////////// surname
surname.addEventListener("mousemove", () => {
  surname.style.background = "green";
});
surname.addEventListener("mouseout", () => {
  surname.style.background = "transparent";
});

//////////////////////////////////// email
email.addEventListener("contextmenu", () => {
  email.style.background = "red";
});
email.addEventListener("mouseout", () => {
  email.style.background = "transparent";
});

//////////////////////////////////// password
password.addEventListener("focus", () => {
  password.value = "lab";
});

//////////////////////////////////// checkbox
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    check.style.visibility = "visible";
  } else {
    check.style.visibility = "hidden";
  }
});

input.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Thanks!");
  });
});



// name1.addEventListener('change', () => {
//     if (surname.value && name1.value && checkbox.checked) {
//         submit.removeAttribute('disabled')
//     } else {
//         submit.disabled = true
//     }
// })
// surname.addEventListener('change', () => {
//     if (surname.value && name1.value && checkbox.checked) {
//         submit.removeAttribute('disabled')
//     }
//     else {
//         submit.disabled = true
//     }
// })
// checkbox.addEventListener('change', () => {
//     if (surname.value && name1.value && checkbox.checked) {
//         submit.removeAttribute('disabled')
//     } else {
//         submit.disabled = true
//     }
// })

function checkFormValidity() {
  if (surname.value && name1.value && checkbox.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.disabled = true;
  }
}

name1.addEventListener("change", checkFormValidity);
surname.addEventListener("change", checkFormValidity);
checkbox.addEventListener("change", checkFormValidity);
