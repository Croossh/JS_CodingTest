function solution12(str: string): string {
  const answer: string = str
    .split("")
    .map((item) => item.toUpperCase())
    .join("");

  return answer;
}

console.log(solution12("ItisTimeToStudy"));
