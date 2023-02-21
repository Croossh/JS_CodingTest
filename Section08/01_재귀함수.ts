function solution8_1(n: number): string {
  let answer = "";
  function DFS(v: number) {
    if (v === 0) {
      return;
    } else {
      DFS(v - 1);
      answer += v;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution8_1(3));
