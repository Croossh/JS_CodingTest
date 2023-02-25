function solution8_5(arr: number[]): string {
  let answer = "NO";

  const total = arr.reduce((acc, curr) => acc + curr, 0);
  const size = arr.length;
  let flag = false;
  function DFS(L: number, sum: number) {
    if (flag) return;
    if (L === size) {
      if (total - sum === sum) {
        answer = "YES";
        flag = true;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution8_5([1, 3, 5, 6, 7, 10]));
