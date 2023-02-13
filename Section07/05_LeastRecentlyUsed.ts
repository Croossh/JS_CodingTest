function solution7_5(num: number, arr: number[]): number[] {
  const cache = Array.from({ length: num }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    const tmp = cache.indexOf(arr[i]);
    tmp > -1 ? cache.splice(tmp, 1) : cache.pop();
    cache.unshift(arr[i]);
  }
  return cache;
}

console.log(solution7_5(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
