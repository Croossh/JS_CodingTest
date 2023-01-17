function solution2_2(arr: number[]): number {
  let answer: number = 1;
  let max = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (max < arr[i]) {
      answer += 1;
      max = arr[i];
    }
  }
  return answer;
}

console.log(solution2_2([130, 135, 148, 140, 145, 150, 150, 153]));
