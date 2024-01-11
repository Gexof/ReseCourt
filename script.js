let courtId = document.getElementById("court-id");
let courtDesc = document.getElementById("court-desc");
let courtType = document.getElementById("court-type");
let courtPrice = document.getElementById("court-price");

let allCourts = [];

// if (localStorage.getItem("Courts") != null) {
//   allCourts = JSON.parse(localStorage.getItem("Courts"));
// }

// show court data
function showCourtData() {
  let courts = ``;
  for (let i = 0; i < allCourts.length; i++) {
    courts += `
    <tr>
    <th>${allCourts[i].courtId}</th>
    <td>${allCourts[i].courtDesc}</td>
    <td>${allCourts[i].courtType}</td>
    <td>${allCourts[i].courtPrice}</td>
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
    courtDesc: courtDesc.value,
    courtType: courtType.value,
    courtPrice: Number(courtPrice.value),
  };
  allCourts.push(court);
  // console.log(allCourts);
  localStorage.setItem("Courts", JSON.stringify(allCourts));
  showCourtData();
}

let addCourtBtn = document.getElementById("add-court");
addCourtBtn.addEventListener("click", addNewCourt);

showCourtData();
