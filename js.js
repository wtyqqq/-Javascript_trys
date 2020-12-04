function getCellID(colsPerRow, r, c) {
    let id = r * colsPerRow + c;
    return "c" + id;
}

function drawGameBoard(rows, cols) {
    let piece = [
        [0, -1, 0, -1, 0, -1, 0, -1],
        [-1, 0, -1, 0, -1, 0, -1, 0],
        [0, -1, 0, -1, 0, -1, 0, -1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0]
    ];
    let tableElement = document.getElementById('board')
    let member1 = document.getElementById('member1');
    document.getElementById('member1').innerText = "player1";
    for (let i; i < rows; i++) {
        let trElement = document.createElement('tr');
        for (let j; j < cols; j++) {
            let tdElement = document.createElement('td')
            let cellID = getCellID(8, i, j);
            tdElement.setAttribute('id', 'cellID');
            trElement.appendChild(tdElement)
            if (piece[i][j] == 1)
                tdElement.appendChild.className('black');
            else
                tdElement.appendChild.className('white');

        }
        tableElement.appendChild(trElement)
    }
}