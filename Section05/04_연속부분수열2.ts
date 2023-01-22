function solution5_4(num: number, arr: number[]): number {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum <= num) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

console.log(solution5_4(5, [1, 3, 1, 2, 3]));
// let count = 0;

// function hey(arr: number[], selectNum: number) {
//   const result: number[][] = [];
//   if (selectNum === 1) return arr.map((item) => [item]);

//   arr.forEach((value, idx, array) => {
//     const restArr = array.slice(idx + 1);
//     const combine = hey(restArr, selectNum - 1);
//     const attached = combine?.map((item) => [value, ...item]);
//     result.push(...attached);
//   });
// }
