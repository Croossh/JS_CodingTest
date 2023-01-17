function solution2_6(arr: Array<number[]>): number {
  // 각 대각선: 총2개 i, i+1... / length-1, length-2...
  let max = 0;
  // 각 행의 합: 각 행의 합 배열 하나 순회
  for (let i = 0; i < arr.length; i++) {
    const reducedRow = arr[i].reduce((acc, curr) => acc + curr, 0);
    if (reducedRow > max) max = reducedRow;
  }

  // 각 열의 합: 각 열의 합 각 배열의 똑같은 인덱스 순회
  for (let i = 0; i < arr[0].length; i++) {
    let tmp: number[] = [];
    arr.forEach((item) => {
      tmp.push(item[i]);
    });
    const reducedCol = tmp.reduce((acc, curr) => acc + curr, 0);
    if (reducedCol > max) max = reducedCol;
  }

  // 대각선의 합: 총2개 i, i+1... / length-1, length-2...
  let i = 0;
  let j = arr[0].length - 1;
  const diaTmp: number[] = [];
  const reverseDiaTmp: number[] = [];

  arr.forEach((item) => {
    diaTmp.push(item[i]);
    reverseDiaTmp.push(item[j]);
    i++;
    j--;
  });

  const reducedDia = diaTmp.reduce((acc, curr) => acc + curr, 0);
  const reducedReverseDia = reverseDiaTmp.reduce((acc, curr) => acc + curr, 0);

  const result = Math.max(reducedDia, reducedReverseDia);
  if (result > max) max = result;

  return max;
}

console.log(
  solution2_6([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
