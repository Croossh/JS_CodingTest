function solution5_3(num: number, arr: number[]): number {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let answer = 0;
    for (let j = i; j < arr.length; j++) {
      answer += arr[j];
      if (answer === num) {
        count++;
        break;
      } else if (answer > num) {
        break;
      }
    }
  }
  return count;
}

console.log(solution5_3(6, [1, 2, 1, 3, 1, 1, 1, 2]));
