function solution6_1(str: string): string {
  // let left = 0;
  // let right = 0;
  // for (let i = 0; i < str.length; i++) {
  //   str[i] === "(" ? left++ : right++;
  // }
  // return left === right ? "YES" : "NO";

  const answer: string[] = [];
  for (let item of str) {
    if (item === "(") {
      answer.push(item);
    } else {
      if (answer.length === 0) return "NO";
      answer.pop();
    }
  }
  return answer.length === 0 ? "YES" : "NO";
}

console.log(solution6_1("(()(()))(()"));
console.log(solution6_1("())()(())))(()()())()())))"));
console.log(solution6_1("(())()"));
