function solutionEx(array: number[]): Array<number[]> {
  // 재귀함수
  const getCombinations = function (
    selectArr: number[],
    selectNumber: number
  ): Array<number[]> {
    const results: Array<number[]> = [];

    // 재귀함수 탈출 조건
    if (selectNumber === 1) return selectArr.map((el) => [el]);

    // 조합
    selectArr.forEach((item: number, index: number, origin: number[]) => {
      const rest: number[] = origin.slice(index + 1);
      console.log("rest", rest);

      const combinations: Array<number[]> = getCombinations(
        rest,
        selectNumber - 1
      );
      console.log("combi", combinations);

      const attached: Array<number[]> = combinations.map((el) => [item, ...el]);
      console.log("att", attached);

      results.push(...attached);
    });
    return results;
  };

  const answerArr: Array<number[]> = [];
  for (let i = 1; i < array.length; i++) {
    const resultArr: Array<number[]> = getCombinations(array, i);
    for (let j = 0; j < resultArr.length; j++) {
      if (
        resultArr[j].reduce((acc, curr) => {
          return acc + curr;
        }, 0) === 100
      ) {
        answerArr.push(resultArr[j]);
      }
    }
  }

  return answerArr;
}

console.log(solutionEx([1, 2, 3, 4]));
