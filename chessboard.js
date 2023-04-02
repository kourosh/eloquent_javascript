let line = "";
let size = 9;

for (row = 0; row < size; row++) {
    for (column = 0; column < size; column++) {
        if ((row + column) % 2 == 0) {
            line = line + " ";
        } else {
            line = line + "#";
        }
    }
    line = line + "\n";
}
console.log(line);