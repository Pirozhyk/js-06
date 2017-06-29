function prn(msg) {
    document.write(msg + '<br>');
}

function fibonacci(n) {
    if (n === 0)
        return 0;
    else if (n === 1)
        return 1;
    var equation = fibonacci(n - 2) + fibonacci(n - 1);
    return equation;
}
var n = Number(prompt('Example 1 ' + 'Enter number: '));
var result = fibonacci(n);
alert('Fibonacci number: ' + result);


function fibonacci2(num) {
    var fib, num1, num2, i;
    for (i = 1; i <= num; i++) {
        fib = num1 + num2 || 1;
        num1 = num2;
        num2 = fib;
    }
    return fib;
}
var num = Number(prompt('Example 2 ' + 'Enter number: '));
var result2 = fibonacci2(num);
prn('Fibonacci number: ' + result2);
