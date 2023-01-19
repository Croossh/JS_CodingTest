const isPrime = (num: number): boolean => {
  // 소수: 1과 자기자신만 약수로 갖는 수. 즉,소수로 나뉘어지면 실패임
  let flag = true;
  if (num === 1) {
    flag = false;
    return flag;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
      return flag;
    }
  }
  return flag;
};

function solution4_2(arr: number[]): number[] {
  const answer = arr
    .map((num) => {
      return parseInt(num.toString().split("").reverse().join(""));
    })
    .filter((item) => isPrime(item));
  return answer;
}

console.log(solution4_2([32, 55, 62, 20, 250, 370, 200, 30, 100]));
