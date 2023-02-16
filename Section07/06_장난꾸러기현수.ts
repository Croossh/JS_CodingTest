function solution7_6(arr: number[]): number[] {
  let hyunsoo = 0;
  let friend = 0;
  // 현수 찾기
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= arr[i] && arr[i + 1] <= arr[i]) {
      hyunsoo = i;
      break;
    }
  }

  // 현수 원래 위치 찾기
  for (let i = arr.length; i > 0; i--) {
    if (arr[i - 1] >= arr[i] && arr[i + 1] >= arr[i]) {
      friend = i;
      break;
    }
  }
  return [hyunsoo + 1, friend + 1];
}

console.log(solution7_6([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution7_6([120, 130, 150, 150, 130, 150]));

// return arr.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   else return a[0] - b[0];
// });
