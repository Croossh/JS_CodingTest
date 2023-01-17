function solution2_1(arr: number[]): number[] {
  const answer = arr.filter((num, idx) => {
    if (idx === 0) {
      return num;
    }
    return num > arr[idx - 1];
  });

  return answer;
}

console.log(solution2_1([7, 3, 9, 5, 6, 12]));
