function solution8_11(n: number): number {
  function DFS(v: number): number {
    if (v === 1) {
      return 1;
    } else {
      return v * DFS(v - 1);
    }
  }
  let answer = DFS(n);
  return answer;
}

console.log(solution8_11(5));
