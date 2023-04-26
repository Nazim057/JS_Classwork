const div = document.createElement("div");
const letStart = document.createElement("button");
const time = document.createElement("p");
const form = document.createElement("form");
const label = document.createElement("label");
const surname = document.createElement("label");
const inputt = document.createElement("input");
const input = document.createElement("input");
const checkbox = document.createElement("input");
const radio = document.createElement("input");
const radio2 = document.createElement("input");
const submit = document.createElement("input");
const next = document.createElement("button");
const br = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");
const br4 = document.createElement("br");
const br5 = document.createElement("br");
const br6 = document.createElement("br");
const br7 = document.createElement("br");
let count = 15;
let interval;
let interval2;

document.body.append(div);

div.append(letStart);

div.append(time);

document.body.append(form);

form.append(label);
form.append(br);
form.append(input);
form.append(br2);
form.append(surname);
form.append(br3);
form.append(inputt);
form.append(br4);
form.append(checkbox);
form.append(br5);
form.append(radio);
form.append(br6);
form.append(radio2);
form.append(br7);
form.append(submit);

document.body.append(next);

input.setAttribute("required", " ");
inputt.setAttribute("required", " ");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("required", " ");
radio.setAttribute("type", "radio");
radio.setAttribute("required", " ");
radio.setAttribute("name", "a");
radio2.setAttribute("type", "radio");
radio2.setAttribute("required", " ");
radio2.setAttribute("name", "a");
submit.setAttribute("type", "submit");
next.setAttribute("type", "submit");

submit.innerHTML = "Submit";
letStart.innerHTML = "Let's start....";
time.innerHTML = `00:${count}`;
label.innerHTML = "<strong>Name</strong>";
surname.innerHTML = "<strong>Surname</strong>";
next.innerHTML = "Next Page >";

time.style.border = "1px solid";
time.style.width = "40px";
form.style.height = "80vh";
form.style.display = "flex";
form.style.alignItems = "center";
form.style.justifyContent = "center";
form.style.flexDirection = "column";
form.style.border = "1px dashed #000";

checkbox.style.accentColor = "red";
radio.style.accentColor = "yellow";
radio2.style.accentColor = "green";

submit.setAttribute("disabled", "true");
next.setAttribute("disabled", "true");

letStart.addEventListener("click", function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
  clearInterval(interval2);
  interval2 = setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    //   form.style.borderLeft = `3px solid rgb(${r}, ${g}, ${b})`;
    //   form.style.borderBottom = `3px solid rgb(${g}, ${b}, ${r})`;
    //   form.style.borderRight = `3px solid rgb(${b}, ${r}, ${g})`;
    //   form.style.borderTop = `3px solid rgb(${r}, ${b}, ${g})`;
    input.style.borderLeft = `3px solid rgb(${r}, ${g}, ${b})`;
    input.style.borderBottom = `3px solid rgb(${g}, ${b}, ${r})`;
    input.style.borderRight = `3px solid rgb(${b}, ${r}, ${g})`;
    input.style.borderTop = `3px solid rgb(${r}, ${b}, ${g})`;
    inputt.style.borderLeft = `3px solid rgb(${b}, ${g}, ${r})`;
    inputt.style.borderBottom = `3px solid rgb(${g}, ${r}, ${b})`;
    inputt.style.borderRight = `3px solid rgb(${r}, ${g}, ${b})`;
    inputt.style.borderTop = `3px solid rgb(${g}, ${b}, ${r})`;
    checkbox.style.accentColor = `rgb(${b}, ${r}, ${g})`;
    radio.style.accentColor = `rgb(${r}, ${b}, ${g})`;
    radio2.style.accentColor = `rgb(${b}, ${g}, ${r})`;
  }, 400);
/////////////////////////////////////////////////////////////////////////////////////////////////

  submit.removeAttribute("disabled");
  clearInterval(interval);
  this.setAttribute("disabled", "true");
  interval = setInterval(() => {
    count--;
    if (count === -1) {
      clearInterval(interval);
      clearInterval(interval2);
      time.innerText = "You missed";
      count = 15;
      return;
    }
    if (count < 10) {
      time.style.color = "red";
    } else {
      time.style.color = "blue";
    }
    if (count === 0) {
      this.removeAttribute("disabled");
      submit.setAttribute("disabled", "true");
    }
    time.innerText = `00:${count}`;
  }, 800);
});

submit.addEventListener("click", function () {
  next.removeAttribute("disabled");
});

next.addEventListener("click", function () {
  alert("Finished!");
});

// setInterval(() => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   //   form.style.borderLeft = `3px solid rgb(${r}, ${g}, ${b})`;
//   //   form.style.borderBottom = `3px solid rgb(${g}, ${b}, ${r})`;
//   //   form.style.borderRight = `3px solid rgb(${b}, ${r}, ${g})`;
//   //   form.style.borderTop = `3px solid rgb(${r}, ${b}, ${g})`;
//   input.style.borderLeft = `3px solid rgb(${r}, ${g}, ${b})`;
//   input.style.borderBottom = `3px solid rgb(${g}, ${b}, ${r})`;
//   input.style.borderRight = `3px solid rgb(${b}, ${r}, ${g})`;
//   input.style.borderTop = `3px solid rgb(${r}, ${b}, ${g})`;
//   inputt.style.borderLeft = `3px solid rgb(${b}, ${g}, ${r})`;
//   inputt.style.borderBottom = `3px solid rgb(${g}, ${r}, ${b})`;
//   inputt.style.borderRight = `3px solid rgb(${r}, ${g}, ${b})`;
//   inputt.style.borderTop = `3px solid rgb(${g}, ${b}, ${r})`;
//   checkbox.style.accentColor = `rgb(${b}, ${r}, ${g})`;
//   radio.style.accentColor = `rgb(${r}, ${b}, ${g})`;
//   radio2.style.accentColor = `rgb(${b}, ${g}, ${r})`;
// }, 400);
