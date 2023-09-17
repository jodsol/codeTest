function solution(n) {
    var answer = 0;
    return answer;
}

function decimalToBinary(decimal) {
    if (decimal === 0) {
        return "0"; // 예외 처리: 0은 그 자체로 2진수로 0입니다.
    }

    let binary = "";
    while (decimal > 0) {
        const remainder = decimal % 2;
        binary = remainder + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}

const decimalNumber = 42; // 2진수로 변환할 10진수 숫자
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`${decimalNumber}의 2진수 표현: ${binaryNumber}`);