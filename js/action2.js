var pieces = [
    [0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

function showGamePieces(rows, cols) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cellID = getCellID(8, i, j)
            var tdElement=document.getElementById(cellID)
            if (pieces[i][j] == -1) {
                tdElement.className = 'redpiece';
            } else if (pieces[i][j] == 1) {
                tdElement.className = 'blackpiece';
            }

        }
    }
}