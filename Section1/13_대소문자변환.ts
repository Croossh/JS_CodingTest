function solution13(str: string): string {
  const answer: string = str
    .split("")
    .map((item) => {
      if (item.toLowerCase() !== item) {
        return item.toLowerCase();
      }
      return item.toUpperCase();
    })
    .join("");

  return answer;
}

console.log(solution13("StuDY"));
