function solution8_3(n: number): string {
  let answer = "";
  function DFS(v: number) {
    if (v > 7) return;
    else {
      answer += v + " ";
      // console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution8_3(1));
