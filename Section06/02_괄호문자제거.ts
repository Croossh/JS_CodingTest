function solution6_2(str: string): string {
  const tmp: string[] = [];
  let answer: string = "";

  for (let item of str) {
    if (item === "(") {
      tmp.push("(");
    } else if (item === ")") {
      tmp.pop();
      continue;
    }

    if (tmp.length === 0) answer += item;
  }
  return answer;
}

console.log(solution6_2("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
