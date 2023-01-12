function solution14(arr: string[]): string {
  const answer: string[] = arr.sort((a, b) => b.length - a.length);

  return answer[0];
}
// 문자열 배열로 들어옴
console.log(solution14(["teacher", "time", "student", "beautiful", "good"]));
