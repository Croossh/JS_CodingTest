function solution17_1(arr: string[]): string[] {
  const setArr = [...new Set(arr)];
  return setArr;
}

console.log(solution17_1(["good", "time", "good", "time", "student"]));

// 16번과 동일한 방법이기 때문에 Set을 쓰지 않는 방법으로 구현
function solution17_2(arr: string[]): string[] {
  arr.forEach((base) => {
    for (let i = 1; i < arr.length - 1; i++) {
      if (base === arr[i]) {
        arr.splice(i, 1);
      }
    }
    return arr;
  });

  return arr;
}

console.log(solution17_2(["good", "time", "good", "time", "student"]));
