const BASE_URL = "http://localhost:5700/users";

const row = document.querySelector(".about-section-div");
const sort = document.querySelector(".sort-btn");
const load = document.querySelector(".load-btn");

let allData = [];
let filtered = [];
let defaultArr = [];

let num = 3;

async function getAllData() {
  row.innerHTML = "";
  const res = await axios(BASE_URL);
  const data = res.data;
  allData = data;
  filtered = filtered.length ? filtered.slice(0, num) : data.slice(0, num);
  filtered.forEach((element) => {
    const card = createCardElement(element);
    row.appendChild(card);
  });
}

getAllData();

function createCardElement(element) {
  const card = document.createElement("span");
  card.classList.add("col", "col-12", "col-lg-4");
  const innerHTML = `
    <div class="about-card">
      <img src="${element.photo}" />
      <h5>${element.title}</h5>
      <p>${element.description}</p>
    </div>
  `;
  card.innerHTML = innerHTML;
  return card;
}

sort.addEventListener("click", () => {
  if (sort.innerHTML == "Ascending") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
    sort.innerHTML = "Descending";
  } else if (sort.innerHTML == "Descending") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
    sort.innerHTML = "Default";
  } else {
    sort.innerHTML = "Ascending";
    filtered = defaultArr;
  }
  getAllData();
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  
  num += 3;

  filtered = allData.slice(0, num)
  defaultArr = filtered;
  getAllData();
  if (sort.innerHTML == "Ascending") {
    filtered = defaultArr;
  } else if (sort.innerHTML == "Descending") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }
});
