fileProcessor();
function fileProcessor() {
    var fs = require("fs");
    if(fs.existsSync("output.txt")) {
        fs.unlinkSync("output.txt")
    }
    fs.readFileSync("input.txt").toString().split("\n").forEach(function(line) {
        fs.appendFileSync("output.txt", solution(line), (err) => {
            if (err) throw err;
        });
    });
}

function solution(size) {
    /**
     * Implement algorithm after this comment
     */
    const middle = Math.floor(size / 2);
    let steps = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const rows = Math.abs(middle - i);
        const columns = Math.abs(middle - j);
        steps += Math.max(rows, columns);
      }
    }
    return steps;
}
