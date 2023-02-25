function solution8_4(n: number): string[] {
  let answer: string[] = [];

  const check = Array.from({ length: n + 1 }, () => false);

  function DFS(v: number) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i < v; i++) {
        if (check[i] === true) tmp += i + " ";
      }
      // 공집합 제외
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // false일때
      check[v] = true;
      DFS(v + 1);
      // true일때
      check[v] = false;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution8_4(3));

// const arr: number[] = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }
// console.log(arr);
