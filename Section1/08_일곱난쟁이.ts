interface Idata {
  [key: string]: number | string;
}

function solution8(array: number[]): Array<number[]> {
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
      const combinations: Array<number[]> = getCombinations(
        rest,
        selectNumber - 1
      );
      const attached: Array<number[]> = combinations.map((el) => [item, ...el]);

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

console.log(solution8([20, 7, 23, 19, 10, 15, 25, 8, 13]));
