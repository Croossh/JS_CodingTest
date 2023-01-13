function solution15(str: string): string {
  const strLength = Math.floor(str.length / 2);

  let answer: string;
  str.length % 2 !== 0
    ? (answer = str.slice(strLength, strLength + 1))
    : (answer = str.slice(strLength - 1, strLength + 1));

  return answer;
}

console.log(solution15("study"));
console.log(solution15("good"));
