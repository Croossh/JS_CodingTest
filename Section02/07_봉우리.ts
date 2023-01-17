function solution2_7(arr: Array<number[]>): number {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const base = arr[i][j];
      const up = arr[i - 1] ? arr[i - 1][j] : 0;
      const down = arr[i + 1] ? arr[i + 1][j] : 0;
      const left = arr[i][j - 1] || 0;
      const rigth = arr[i][j + 1] || 0;

      if (base > up && base > down && base > left && base > rigth) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(
  solution2_7([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

// i 열의 j번째의 숫자가
// 상하: i-1 의 j / i+1 의 j
// 좌우: i의 j-1 / i의 j+1
// 모두 커야 answer++
// 만약 -1 혹은 +1 이 undefined 라면 그거슨 0 임

// arr[i - 1][j] || 0 으로 앞이 undefined 가 나오면 0 을 출력하게 해주려고 했지만 앞부분의 arr[i - 1]이 undefined 가 나오면 뒷부분의 [j]를 실행할 수 없기 때문에 에러가 계속 뜨는것을 몰랐다.
// 옵셔널 체이닝으로 arr[i - 1]?[j] 해주려고 했지만 옵셔널체이닝은 객체에만 적용되는걸로 확인되었다...
// 그래서 어쩔수 없이 앞부분이 undefined가 되는 경우에는 삼항연산자로 처리를 해주었다.
