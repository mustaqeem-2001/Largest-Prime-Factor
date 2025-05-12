function largestPrimeFactor(num) {
    let temp = num;
    let odd = 3;

    while (temp % 2 === 0) {temp /= 2;}
    if (temp === 1) {
        return 2;
    }
    while (true) {
            if (temp % odd === 0) {
                temp /= odd;
            }
            else if (temp > 1 ) {
                odd += 2;
            }
            else {
                return odd;
            }
        }
}
console.log(largestPrimeFactor(600851475143));