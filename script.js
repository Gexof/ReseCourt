let courtId = document.getElementById("court-id");
let courtName = document.getElementById("court-name");
let courtDesc = document.getElementById("court-desc");
let courtWidth = document.getElementById("court-width");
let courtType = document.getElementById("court-type");

let allCourts = [];

// show court data
function showCourtData() {
  let courts = ``;
  for (let i = 0; i < allCourts.length; i++) {
    courts += `
    <tr>
    <th>${allCourts[i].courtId}</th>
    <td>${allCourts[i].courtName}</td>
    <td>${allCourts[i].courtDesc}</td>
    <td>${allCourts[i].courtWidth}</td>
    <td>${allCourts[i].courtType}</td>
    <td><i class="fa-regular fa-pen-to-square"></i></td>
    <td><i class="fa-solid fa-trash-can"></i></td>
  </tr>
    `;
  }
  document.getElementById("court-body-table").innerHTML = courts;
}

function addNewCourt() {
  let court = {
    courtId: courtId.value,
    courtName: courtName.value,
    courtDesc: courtDesc.value,
    courtWidth: courtWidth.value,
    courtType: courtType.value,
  };
  allCourts.push(court);
  // console.log(allCourts);

  showCourtData();
}

let addCourtBtn = document.getElementById("add-court");
addCourtBtn.addEventListener("click", addNewCourt);
