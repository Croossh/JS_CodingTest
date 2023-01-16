function solution2_3(arr1: number[], arr2: number[]): string[] {
  //1: 가위, 2: 바위, 3: 보
  let answer: string[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer.push("D");
    } else if (
      (arr1[i] === 1 && arr2[i] === 3) ||
      (arr1[i] === 2 && arr2[i] === 1) ||
      (arr1[i] === 3 && arr2[i] === 2)
    ) {
      answer.push("A");
    } else {
      answer.push("B");
    }
  }
  return answer;
}

console.log(solution2_3([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
