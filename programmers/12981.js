//https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    var answer = [];
    for (var y = 3; y <= (brown + yellow) / y; y++) {
        var x = Math.floor((brown + yellow) / y);
        if ((x - 2) * (y - 2) === yellow) {
            break;
        }
    }

    return [x, y];
}