function main(input) {
    var lines = input.trim().split('\n');

    var N = parseInt(lines[0]);
    var marks = lines[1].split(' ').map(Number);
    var P = parseInt(lines[2]);

    var pass = 0;

    for (var i = 0; i < N; i++) {
        if (marks[i] >= P) {
            pass++;
        }
    }

    console.log("Pass: " + pass);
    console.log("Fail: " + (N - pass));
}

process.stdin.resume();
process.stdin.setEncoding("utf8");

var data = "";

process.stdin.on("data", function (chunk) {
    data += chunk;
});

process.stdin.on("end", function () {
    main(data);
});
