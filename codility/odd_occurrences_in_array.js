// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 해쉬맵에 넣어서 해쉬맵의 있는 수가 홀수인 것을 찾아 리턴 없으면 0을 리턴
function solution(A) {
    // Implement your solution here
    const hashMap = {};

    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        if (hashMap[element]) {
            hashMap[element]++;
        } else {
            hashMap[element] = 1;
        }
    }


    for (const key in hashMap) {
        const value = hashMap[key];

        if (value % 2 === 1) {
            return Number(key);
        }
    }

    return 0;
}
