https://school.programmers.co.kr/learn/courses/30/lessons/12973


// function removeChar(str) {
//     for (let i = 0; i < str.length - 1; i++) {
//         if (str[i] === str[i + 1]) {
//             const leftPart = str.slice(0, i);
//             const rightPart = str.slice(i + 2);

//             return leftPart + rightPart;
//         }
//     }

//     if (str.length === 0) {
//         return 1;
//     } else {
//         return 0;

//     }
// }

// function solution(s) {
//     let str = s;
//     let len = str.length

//     while (len) {
//         str = removeChar(str);


//         console.log(str)
//         if (Number.isInteger(str)) {

//             return str
//         }
//     }
// }



// 맞닿은 연관관계는 stack을 생각해보자
function solution(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) stack.pop();
        else stack.push(s[i]);

    }

    return stack.length ? 0 : 1;
}