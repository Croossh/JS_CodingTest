function solution7_10(target: number, arr: number[]): number {
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  let answer = 0;
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    console.log("세팅", lt, rt, mid);
    console.log("mid", mid);
    if (arr[mid] === target) {
      console.log("들어옴");
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      console.log("미드가 더 큼");
      rt = mid - 1;
    } else {
      console.log("타겟이 더 큼");
      lt = mid + 1;
    }
  }
  console.log(arr);
  return answer;
}
console.log(solution7_10(32, [23, 87, 65, 12, 57, 32, 99, 81]));
