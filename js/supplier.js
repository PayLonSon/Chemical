function addChemicalByForm() {
  const form = document.getElementById("editChemicalForm");
  const inputs = form.getElementsByTagName("input");
  var chemical = {};

  for (const input of inputs) {
    chemical[input.id] = input.value;
  }

  console.log(chemical);
  addChemicals([chemical]);
  form.submit();
}

function addChemicals(chemicals) {
  var supplyChemicals = JSON.parse(localStorage.supplyChemical || "[]");  

  supplyChemicals.push(...chemicals);
  localStorage.supplyChemical = JSON.stringify(supplyChemicals);

  console.log("Added chemicals");
  console.log(supplyChemicals);
}

function getChemical() {
  const supplyChemicals = JSON.parse(localStorage.supplyChemical);
  const table = document.getElementById("supplyChemicalTable");
  const headers = ["chemicalEN", "chemicalTW", "casNo", "mTpye", "w", "unit", "remain", "PK", "isToxic"];


  for (const chemical of supplyChemicals) {
    console.log(chemical);
    var row = document.createElement("tr");
    table.appendChild(row);

    for (const header of headers) {
      var td = document.createElement("td");
      td.innerHTML = chemical[header];

      row.appendChild(td);
    }
  }

  initBtn();
}

function initBtn() {
  const table = document.getElementById("supplyChemicalTable");
  const rows = table.getElementsByTagName("tr");
  var count = 0;

  for (const row of rows) {
    var tdEdit = document.createElement("td");
    tdEdit.innerHTML = `<a class="btn btn-success btn-circle btn-sm" href="#" data-toggle="modal" data-target="#editModal"><i class="fas fa-flag"></i></a>`;

    var tdApply = document.createElement("td");
    tdApply.innerHTML = `<a href="apply.html?id=${count++}" class="btn btn-primary btn-circle btn-sm"><i class="">2</i></a>`;

    row.appendChild(tdEdit);
    row.appendChild(tdApply);
  }
}

/*
c = [
  {
    "id": 1,
    "name": "x"
  },
  {
    "id": 2,
    "name": "y"
  }
];

d = [
  {
    "id": 3,
    "name": "xx"
  },
  {
    "id": 4,
    "name": "yy"
  }
];

localStorage.setItem("supplyChemical", JSON.stringify(c));
addChemicals(d);
*/