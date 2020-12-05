var back = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];
function getCellID(colsPerRow, r, c) {
    var id = r * colsPerRow + c;
    return "c" + id;
}

function drawGameBoard(rows, cols) {
    var member1 = document.getElementById("member1")
    var boardElement = document.getElementById("board");
    var tableElement = document.createElement('table');
    member1.innerText="Chen_Wang";
    for (var i = 0; i < rows; i++) {

        var trElement = document.createElement('tr');
        for (var j = 0; j < cols; j++) {

            var tdElement = document.createElement('td');
            var cellID = getCellID(8, i, j);
            tdElement.setAttribute('id', cellID);
            trElement.appendChild(tdElement);

            if (back[i][j] == 1)
                tdElement.className = 'white';
            else
                tdElement.className = 'black';
        }

        tableElement.appendChild(trElement);
    }

    boardElement.appendChild(tableElement);

}