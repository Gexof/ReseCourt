let customerName = document.getElementById("customer-name");
let courtId = document.getElementById("court-id");
let date = document.getElementById("date");
let startTime = document.getElementById("start-time");
let endTime = document.getElementById("end-time");

let addResBtn = document.getElementById("reservation-btn");
let updateResBtn = document.getElementById("update-reservation-btn");
updateResBtn.style.display = "none";

let allCourts = [];
let allRes = [];

if (localStorage.getItem("Courts") != null) {
  allCourts = JSON.parse(localStorage.getItem("Courts"));
}

if (localStorage.getItem("Reserve") != null) {
  allRes = JSON.parse(localStorage.getItem("Reserve"));
}

console.log(allCourts);

function showId() {
  let courtsOptions = ``;

  for (let i = 0; i < allCourts.length; i++) {
    courtsOptions += `<option value="${i}">${allCourts[i].courtId}</option>`;
  }
  courtId.innerHTML = courtsOptions;
}

showId();

function showResData() {
  let res = ``;
  for (let i = 0; i < allRes.length; i++) {
    res += `
    <tr>
    <td>${i + 1}</td> 
    <td>${allRes[i].customerName}</td>
    <td>${allRes[i].courtId}</td>
    <td>${allRes[i].date}</td> 
    <td>${allRes[i].startTime}</td> 
    <td>${allRes[i].endTime}</td> 
    <td><button onclick="editCourt(${i})" class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button></td>
    <td><button onclick="deleteRow(${i})" class="del-btn"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>
    `;
  }
  document.getElementById("res-body-table").innerHTML = res;
}

function addRes() {
  let Reserve = {
    customerName: customerName.value,
    courtId: courtId.value,
    date: date.value,
    startTime: startTime.value,
    endTime: endTime.value,
  };

  allRes.push(Reserve);
  localStorage.setItem("Reserve", JSON.stringify(allRes));
  showResData();

  customerName.value = "";
  date.value = "";
  startTime.value = "";
  endTime.value = "";
}

addResBtn.addEventListener("click", addRes);

showResData();
