
/* print out odd numbers from 1 to 20 */
function sum_even_numbers() {
    var sum = 0;
    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
        return sum;
    }

/* decrease in multiples of 3  */
function sum_even_numbers() {
    var sum = 0;
    for (var i = 100; i >= 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
        return sum;
    }

/* print out sequence of numbers */
function printSequence() {
    var arr = [4, 2.5, 1, -0.5, -2, -3.5];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
/*SIGMA*/
function sigma() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
/*FACTORIAL*/
function factorial() {
    var multi = 1;
    for (var i = 1; i <= 12; i++) {
        multi *= i;
    }
    return multi;
}
