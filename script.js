// let courtId = document.getElementById("court-id");
let courtDesc = document.getElementById("court-desc");
let courtType = document.getElementById("court-type");
let courtPrice = document.getElementById("court-price");

let allCourts = [];

if (localStorage.getItem("Courts") != null) {
  allCourts = JSON.parse(localStorage.getItem("Courts"));
}

// show court data
function showCourtData() {
  let courts = ``;
  for (let i = 0; i < allCourts.length; i++) {
    courts += `
    <tr>
    <th>${i + 1}</th>
    <td>${allCourts[i].courtDesc}</td>
    <td>${allCourts[i].courtType}</td>
    <td>${allCourts[i].courtPrice}</td>
    <td>
    <button onclick="" class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></button></td>
    <td><button onclick="deleteRow(${i})" class="del-btn"><i class="fa-solid fa-trash-can"></i></button></td>
  </tr>
    `;
  }
  document.getElementById("court-body-table").innerHTML = courts;
}

// add new court
function addNewCourt() {
  let court = {
    courtDesc: courtDesc.value,
    courtType: courtType.value,
    courtPrice: Number(courtPrice.value),
  };
  allCourts.push(court);
  localStorage.setItem("Courts", JSON.stringify(allCourts));
  showCourtData();

  courtId.value = "";
  courtDesc.value = "";
  courtPrice.value = "";
}

let addCourtBtn = document.getElementById("add-court");
addCourtBtn.addEventListener("click", addNewCourt);

showCourtData();

// delete row
function deleteRow(i) {
  allCourts.splice(i, 1);
  localStorage.Courts = JSON.stringify(allCourts);
  showCourtData();
}
