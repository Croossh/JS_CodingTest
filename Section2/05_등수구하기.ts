function solution2_5(arr: number[]): number[] {
  // 정렬하고,
  // sort도 원본 배열을 바꿔버리기 때문에 복사가 필요함
  const sortedArr: number[] = [...arr].sort((a, b) => b - a);
  // 기존 배열과 비교해서
  // 새로운 배열에 정렬된 인덱스의 번호를 넣는다.
  const orderArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sortedArr[j] !== sortedArr[j - 1]) {
        if (arr[i] === sortedArr[j]) {
          orderArr.push(j + 1);
        }
      }
    }
  }
  // 다만 같은 숫자일 경우에는 첫번째 나온 인덱스와 번호를 같게 하면 끝

  // [1, 2, 3, 5, 4] 일때 [100, 99, 99, 80, 90] 이면
  // 2번 인덱스를 1번과 비교
  // 3번 인덱스를 2번과 비교
  // ...

  // 만약 전 인덱스와 같은 숫자라면 전 인덱스를 넣어버림
  // 그럼 자연스럽게 같지 않는 번호가 나올땐, 해당 인덱스로 넘어감

  return orderArr;
}

console.log(solution2_5([87, 89, 92, 100, 76]));
console.log(solution2_5([100, 99, 80, 90, 99]));
