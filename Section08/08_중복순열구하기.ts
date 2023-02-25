function solution8_8(num: number, time: number): Array<number[]> {
  let answer: Array<number[]> = [];
  let tmp = Array.from({ length: time }, () => 0);
  function DFS(L: number) {
    if (L === time) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= num; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution8_8(3, 2));
