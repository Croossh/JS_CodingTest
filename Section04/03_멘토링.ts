function solution4_3(arr: Array<number[]>): number {
  const matchArr: string[] = [];
  const answer: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      for (let z = j + 1; z < arr[0].length; z++) {
        matchArr.push(String(arr[i][j]) + String(arr[i][z]));
      }
    }
  }

  matchArr.forEach((item) => {
    let count = 0;
    for (let i = 0; i < matchArr.length; i++) {
      if (item === matchArr[i]) count++;
    }
    if (count === 3) answer.push(item);
  });

  return [...new Set(answer)].length;
}

console.log(
  solution4_3([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
