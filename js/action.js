function getCellID(colsPerRow, r, c) {
    var id = r * colsPerRow + c;
    return "c" + id;
}

function drawGameBoard(rows, cols) {
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

    var tableElement = document.createElement('table');
    var member1 = document.getElementById('member1');

    for (var i = 0; i < rows; i++) {

        var trElement = document.createElement('tr');

        for (var j = 0; j < cols; j++) {

            var tdElement = document.createElement('td');
            var cellID = getCellID(8, i, j);
            tdElement.setAttribute('id', cellID);
            trElement.appendChild(tdElement);

            if (back[i][j] == 1)
                tdElement.className = 'black';
            else
                tdElement.className = 'white';
        }

        tableElement.appendChild(trElement);

    }

    let boardElement = document.getElementById("board");
    boardElement.appendChild(tableElement);

}