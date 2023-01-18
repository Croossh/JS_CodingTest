function solution4_1(num: number, arr: number[]): number {
  let max = 0;
  const sumArr = arr.map((item) => {
    return item
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
  });
  max = Math.max(...sumArr);

  const answer = arr.filter((_, idx) => {
    if (sumArr[idx] === max) {
      return arr[idx];
    }
  });
  return Math.max(...answer);
}

console.log(solution4_1(7, [128, 460, 603, 40, 521, 137, 123]));
