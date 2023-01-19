function solution4_4(M: number, arr: Array<number[]>): number {
  const sortedArr = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let count = 0;
  let max = 0;
  // const answer: Array<number[]> = [];
  for (let i = 0; i < sortedArr.length; i++) {
    const originSum = sortedArr[i][0] + sortedArr[i][1];
    const halfSum = sortedArr[i][0] / 2 + sortedArr[i][1];
    max += originSum;
    if (max < M) {
      // answer.push(sortedArr[i]);
      count++;
    } else if (max > M) {
      max -= originSum;
      max += halfSum;
      if (max === M) {
        // answer.push(sortedArr[i]);
        count++;
        break;
      } else if (max < M) {
        // answer.push(sortedArr[i]);
        max += halfSum;
        count++;
      } else {
        max -= halfSum;
      }
    }
  }
  // console.log(answer);
  return count;
}

console.log(
  solution4_4(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
