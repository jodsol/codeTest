const limit = 1234567

function solution(n) {
    var answer = 0;

    answer = fibonacci(n)
    return answer;
}

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % limit;
    }

    return fib[n];
}