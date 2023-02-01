function solution6_4(str: string): number {
  const answer: string[] = str.split("");
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "+") {
      answer.splice(
        i - 2,
        3,
        String(Number(answer[i - 2]) + Number(answer[i - 1]))
      );
      i -= 2;
    }
    if (answer[i] === "-") {
      answer.splice(
        i - 2,
        3,
        String(Number(answer[i - 2]) - Number(answer[i - 1]))
      );
      i -= 2;
    }
    if (answer[i] === "*") {
      answer.splice(
        i - 2,
        3,
        String(Number(answer[i - 2]) * Number(answer[i - 1]))
      );
      i -= 2;
    }
    if (answer[i] === "/") {
      answer.splice(
        i - 2,
        3,
        String(Number(answer[i - 2]) / Number(answer[i - 1]))
      );
      i -= 2;
    }
  }
  return Number(answer[0]);
}

console.log(solution6_4("352+*9-"));
