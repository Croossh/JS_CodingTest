function solution5_5(num: number, arr: number[]): number {
  let max = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (max < arr[i] + arr[i + 1] + arr[i + 2]) {
      max = arr[i] + arr[i + 1] + arr[i + 2];
    }
  }
  return max;
}

console.log(solution5_5(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// function solution5_5(num: number, arr: number[]): number {
//   let max = 0;
//   const resultArr: Array<number[]> = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (max < arr[i] + arr[i + 1] + arr[i + 2]) {
//       max = arr[i] + arr[i + 1] + arr[i + 2];
//       resultArr.pop();
//       resultArr.push([arr[i], arr[i + 1], arr[i + 2]]);
//     }
//   }
//   console.log("연속된 최고 매출", resultArr[0]);
//   return max;
// }

// console.log(solution5_5(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
