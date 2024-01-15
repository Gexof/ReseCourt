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

function showId() {
  let courtsOptions = ``;

  for (let i = 0; i < allCourts.length; i++) {
    courtsOptions += `<option value="${i + 1}">${
      allCourts[i].courtId
    }</option>`;
  }
  courtId.innerHTML = courtsOptions;
}

showId();

function getPrice(cId) {
  let id = cId;
  let price;
  for (let i = 0; i < allCourts.length; i++) {
    if (allCourts[i].courtId == id) {
      price = allCourts[i].courtPrice;
      break;
    }
  }

  return price;
}

function getTime(sTime, eTime) {
  var startTimeValue = sTime;
  var endTimeValue = eTime;

  var startDate = new Date("2000-01-01T" + startTimeValue);
  var endDate = new Date("2000-01-01T" + endTimeValue);

  var timeDiff = endDate - startDate;

  var timeDiffInHours = timeDiff / (1000 * 60 * 60);

  return timeDiffInHours;
}

function calcTotal(cId, sTime, eTime) {
  let price = getPrice(cId);
  let time = getTime(sTime, eTime);
  let total = price * time;

  return total;
}

function showResData() {
  let res = ``;
  for (let i = 0; i < allRes.length; i++) {
    res += `
    <tr>
    <td>${i + 1}</td> 
    <td>${allRes[i].customerName}</td>
    <td>${allRes[i].courtId++}</td>
    <td>${allRes[i].date}</td> 
    <td>${allRes[i].startTime}</td> 
    <td>${allRes[i].endTime}</td> 
    <td>${allRes[i].total}</td> 
    <td><button onclick="editCourt(${i})" class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button></td>
    <td><button onclick="deleteRow(${i})" class="del-btn"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>
    `;
  }
  document.getElementById("res-body-table").innerHTML = res;
}

function addRes() {
  let total = calcTotal(courtId.value, startTime.value, endTime.value);

  let Reserve = {
    customerName: customerName.value,
    courtId: courtId.value,
    date: date.value,
    startTime: startTime.value,
    endTime: endTime.value,
    total: total,
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

function deleteRow(i) {
  allRes.splice(i, 1);
  localStorage.setItem("Reserve", JSON.stringify(allRes));
  showResData();
}
