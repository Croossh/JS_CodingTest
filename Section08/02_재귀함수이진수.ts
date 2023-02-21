function solution8_2(n: number) {
  let answer = "";
  function DFS(v: number) {
    if (v === 0) {
      return;
    } else {
      DFS(Math.floor(v / 2));
      answer += v % 2;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution8_2(11));
