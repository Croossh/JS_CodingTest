function solution8_6(num: number, arr: number[]): number {
  let answer = 0;
  const size = arr.length;
  function DFS(L: number, sum: number) {
    if (sum > num) return;
    if (L === size) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution8_6(259, [81, 58, 42, 33, 61]));
