function solution7(day: number, arr: number[]): number {
  let counter: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === day) {
      counter += 1;
    }
  }
  return counter;
}

console.log(solution7(3, [25, 23, 11, 47, 53, 17, 33]));
