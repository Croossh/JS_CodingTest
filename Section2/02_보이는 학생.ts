function solution2_2(arr: number[]): number {
  let answer: number = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const tmpArr: number[] = arr.slice(i, i + 2);
    if (tmpArr[0] < tmpArr[1]) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution2_2([130, 135, 148, 140, 145, 150, 150, 153]));
