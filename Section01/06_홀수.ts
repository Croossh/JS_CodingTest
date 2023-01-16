function solution6(arr: number[]): number[] {
  const findOdd: number[] = [];
  let sumOdd: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOdd += arr[i];
      findOdd.push(arr[i]);
    }
  }

  const oddMinNumber: number = Math.min(...findOdd);

  return [sumOdd, oddMinNumber];
}

console.log(solution6([12, 77, 38, 41, 53, 92, 85]));
