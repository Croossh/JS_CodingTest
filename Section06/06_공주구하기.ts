function solution6_6(num1: number, num2: number): number {
  let arr: number[] = Array.from({ length: num1 }, (_, i) => i + 1);
  const queue: number[] = [];
  while (true) {
    for (let i = 1; i < num2; i++) {
      const tmp = arr.shift();
      if (tmp !== undefined) queue.push(tmp);
      if (arr.length === 0) arr = queue;
    }
    arr.shift();
    if (arr.length === 1) return arr[0];
  }
}

console.log(solution6_6(8, 3));

// arr = 7 8
// queue = 2 4 7 8
