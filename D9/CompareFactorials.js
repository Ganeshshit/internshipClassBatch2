function CompareFactorials(n1, n2) {
    var factorial1 = 1;
    var factorial2 = 1;

    for (var i = 1; i <= n1; i++) {
        factorial1 *= i;
    }

    for (var j = 1; j <= n2; j++) {
        factorial2 *= j;
    }

    if (factorial1 == factorial2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

CompareFactorials(1, 2);
