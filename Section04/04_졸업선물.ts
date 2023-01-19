function solution4_4(num: number, arr: Array<number[]>): number | undefined {
  let answer: Array<number[]> = [];

  const getPrice = (t: Array<number[]>) => {
    const speadArr = t.reduce((acc, curr) => [...acc, ...curr]);
    const max = Math.max(...speadArr);
    const tmpArr = [...speadArr].splice(speadArr.indexOf(max), 1, max / 2);
    const result = tmpArr.reduce((acc, curr) => acc + curr, 0);

    return result === num ? t.length : 0;
  };

  // i = 여기는 배열 하나짜리
  for (let i = 0; i < arr.length; i++) {
    answer = [];
    answer.push(arr[i]);
    if (getPrice(answer)) {
      return getPrice(answer);
    }
    // j = 여기는 배열 두개짜리
    for (let j = i + 1; j < arr.length; j++) {
      answer = [];
      answer.push(arr[i], arr[j]);
      if (getPrice(answer)) {
        return getPrice(answer);
      }
      // z = 여기는 배열 세개짜리
      for (let z = j + 1; z < arr.length; z++) {
        answer = [];
        answer.push(arr[i], arr[j], arr[z]);
        if (getPrice(answer)) {
          return getPrice(answer);
        }
        // h = 여기는 배열 네개짜리
        for (let h = z + 1; h < arr.length; h++) {
          answer = [];
          answer.push(arr[i], arr[j], arr[z], arr[h]);
          if (getPrice(answer)) {
            return getPrice(answer);
          }
        }
      }
    }
  }
}

console.log(
  solution4_4(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
