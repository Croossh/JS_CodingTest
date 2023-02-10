function solution7_5(num: number, arr: number[]): number[] {
  const cash = Array.from({ length: num }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    const tmp = cash.indexOf(arr[i]);
    if (tmp > -1) {
      // 있을때
      cash.splice(tmp, 1);
      cash.unshift(arr[i]);
    } else {
      // 없을때
      cash.pop();
      cash.unshift(arr[i]);
    }
  }
  return cash;
}

console.log(solution7_5(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
