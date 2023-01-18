function solution3_1(str: string): string {
  const answer = str.toLowerCase();
  const reversedAnswer = str.toLowerCase().split("").reverse().join("");

  return answer === reversedAnswer ? "YES" : "NO";
}

console.log(solution3_1("gooG"));
