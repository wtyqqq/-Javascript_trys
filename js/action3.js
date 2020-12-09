function random(min, max) {
    return Math.floor(Math.random() * (max - min)) === min ? (min + 1) : Math.floor(Math.random() * (max - min)) + min;
}

var count = 0;

function randomMove() {
    var member3 = document.getElementById("member3");
    member3.innerText = "Tianyi_Wang";
    var r1 = 0;
    var c1 = 0;
    var tor1 = 0;
    var toc1 = 0;
    if ((count % 2) == 0) {
        while (1) {
            r1 = random(0, 8);
            c1 = random(0, 8);
            if (pieces[r1][c1] == 1) {
                var x = r1 - 1;
                if (x < 0) continue;
                var y0 = c1 + 1;
                var y1 = c1 - 1;
                if (random(0, 2) == 0) {
                    if ((y0 >= 0 && y0 < 8) && pieces[x][y0] != 1) {
                        tor1 = x;
                        toc1 = y0;
                        break;
                    } else {
                        if ((y1 >= 0 && y1 < 8) && pieces[x][y1] != 1) {
                            tor1 = x;
                            toc1 = y1;
                            break;
                        }
                    }
                } else {
                    if ((y1 >= 0 && y1 < 8) && pieces[x][y1] != 1) {
                        tor1 = x;
                        toc1 = y1;
                        break;
                    } else {
                        if ((y0 >= 0 && y0 < 8) && pieces[x][y0] != 1) {
                            tor1 = x;
                            toc1 = y0;
                            break;
                        }
                    }
                }
            }
        }
        var cell1 = document.getElementById(getCellID(8, r1, c1));
        var cell2 = document.getElementById(getCellID(8, tor1, toc1));
        cell1.className = 'white';
        cell2.className = 'blackpiece';
        pieces[tor1][toc1] = 1;
        pieces[r1][c1] = 0;
    } else {
        while (1) {
            r1 = random(0, 8);
            c1 = random(0, 8);
            if (pieces[r1][c1] == -1) {
                var x = r1 + 1;
                if (x < 0) continue;
                var y0 = c1 + 1;
                var y1 = c1 - 1;
                if (random(0, 2) == 0) {
                    if ((y0 >= 0 && y0 < 8) && pieces[x][y0] != -1) {
                        tor1 = x;
                        toc1 = y0;
                        break;
                    } else {
                        if ((y1 >= 0 && y1 < 8) && pieces[x][y1] != -1) {
                            tor1 = x;
                            toc1 = y1;
                            break;
                        }
                    }
                } else {
                    if ((y1 >= 0 && y1 < 8) && pieces[x][y1] != -1) {
                        tor1 = x;
                        toc1 = y1;
                        break;
                    } else {
                        if ((y0 >= 0 && y0 < 8) && pieces[x][y0] != -1) {
                            tor1 = x;
                            toc1 = y0;
                            break;
                        }
                    }
                }
            }
        }
        var cell1 = document.getElementById(getCellID(8, r1, c1));
        var cell2 = document.getElementById(getCellID(8, tor1, toc1));
        cell1.className = 'white';
        cell2.className = 'redpiece';
        pieces[tor1][toc1] = -1;
        pieces[r1][c1] = 0;
    }
    count++;
}
