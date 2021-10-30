function addRow() {
      var name = prompt('Введите название строки', "");
      var table = document.getElementById("myTable");
      var row = table.insertRow(); 
      var cell = row.insertCell();
      cell.innerHTML = name;
    }
function removeRow(){
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    table.deleteRow(rowCount-1);
}    