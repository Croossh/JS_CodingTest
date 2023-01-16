function solution10(word: string, str: string): number {
  let answer: number = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === str) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution10("COMPUTERPROGRAMMING", "R"));
