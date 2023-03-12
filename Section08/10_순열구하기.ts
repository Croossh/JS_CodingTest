function solution8_10(n: number, arr: number[]): Array<number[]> {
  const answer: Array<number[]> = [];
  const size = arr.length;
  const check = Array.from({ length: size }, () => false);
  const tmp: number[] = [];

  function DFS(L: number) {
    if (L === n) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < size; i++) {
        if (!check[i]) {
          check[i] = true;
          tmp[L] = arr[i];
          DFS(L + 1);
          check[i] = false;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution8_10(2, [3, 6, 9]));
