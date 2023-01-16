function solution2(a: number, b: number, c: number): string {
  const sortedTriangleArr: number[] = [a, b, c].sort((a, b) => a - b);

  return sortedTriangleArr[0] + sortedTriangleArr[1] > sortedTriangleArr[2]
    ? "YES"
    : "NO";
}

console.log(solution2(13, 33, 17));
