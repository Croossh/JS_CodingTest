function solution8_7(n: number, ps: number[], pt: number[]): number {
  let answer = 0;
  const size = ps.length;
  function DFS(L: number, sum: number, time: number) {
    if (time > n) return;
    if (L === size) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

const ps = [10, 25, 15, 6, 7];
const pt = [5, 12, 8, 3, 4];
console.log(solution8_7(20, ps, pt));
