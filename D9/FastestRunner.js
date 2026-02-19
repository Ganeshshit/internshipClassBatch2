function fastestRunner(runners) {
    var index;
    var minNo = runners[0];
    for (var i = 0; i < runners.length; i++) {
        if (runners[i] <= minNo) {
            minNo = runners[i]
            index = i;
        }
    }
    return index+1;
}
console.log(fastestRunner([12, 9, 15, 9, 10]))