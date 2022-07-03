fetch("https://api.npoint.io/86827b323c67e57abab6")
  .then((response) => response.json())
  .then((data) => buildTable(data));

function buildTable(data) {
  let table = document.getElementById("table");
  for (let i = 0; i < data.length; i++) {
    let row = `
    <tr>
    <td class="table-body__table-data">${data[i].id}</td>
    <td class="table-body__table-data">${data[i].title}</td>
    <td class="table-body__table-data">${data[i].inProgress}</td>
    <td class="table-body__table-data">${data[i].isComplete}</td>
    <td class="table-body__table-data">${data[i].myScore}</td>
    </tr>`;
    table.innerHTML += row;
  }
}
