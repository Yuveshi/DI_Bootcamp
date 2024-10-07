let table = document.body.querySelector("table");

let rows = table.rows.length;

for (let row = 0; row < rows; row++) {
    let diagonal = table.querySelectorAll("tr")[row].children[row];
    diagonal.setAttribute("style", "color:red");
    diagonal = table.querySelectorAll("tr")[4-row].children[row];
    diagonal.setAttribute("style", "color:red");
}