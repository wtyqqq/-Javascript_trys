function random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function randomMove() {
    var r1 = random(0, 8);
    var c1 = random(0, 8);
    var r2 = random(0, 8);
    var c2 = random(0, 8);
    var cell1 = document.getElementById(getCellID(8, r1, c1));
    var cell2 = document.getElementById(getCellID(8, r2, c2));

    for (var i = 0; i < 100000; i++) {
        if ((r1 == r2 && c1 == c2) || pieces[r1][c1]==0) {
            r1 = random(0, 8);
            c1 = random(0, 8);
            r2 = random(0, 8);
            c2 = random(0, 8);
        }
    }
    cell1.className = 'white';
    if (pieces[r1][c1] == -1) {
        cell2.className = 'redpiece';
    } else if (pieces[r1][c1] == 1) {
        cell2.className = 'blackpiece';
    }
    pieces[r1][c1] = 0;
}
