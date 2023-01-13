function solution16(str: string): string {
  const setArr = [...new Set(str)].join("");
  return setArr;
}

console.log(solution16("ksekkset"));
