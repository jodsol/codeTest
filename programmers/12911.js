// https://school.programmers.co.kr/learn/courses/30/lessons/12911
function solution(n) {
    var answer = 0;

    var binary = decimalToBinary(n)

    var countBinaryOne = countOnesInBinary(binary)
    var answer = n + 1

    while (countBinaryOne !== countOnesInBinary(decimalToBinary(answer))) {
        answer++;
    }

    return answer;
}

// 10진수를 2진수로 바꾸는 함수
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

// Binary에서 1의 개수 구하는 함수
function countOnesInBinary(binaryString) {
    const onesCount = (binaryString.match(/1/g) || []).length;
    return onesCount;
}
