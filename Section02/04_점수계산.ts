function solution2_4(arr: number[]): number {
  let answer = 0;
  let curr = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      curr++;
      answer += curr;
    } else {
      curr = 0;
    }
  }
  return answer;
}

console.log(solution2_4([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
