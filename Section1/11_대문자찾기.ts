function solution11(str: string): number {
  // 기존 문자열을 소문자로 바꿔놨을때 같지 않다면 OK
  const answer: number = str.split("").filter((item) => {
    return item.toLowerCase() !== item;
  }).length;

  return answer;
}

console.log(solution11("KoreaTimeGood"));
