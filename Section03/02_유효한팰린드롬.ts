function solution3_2(str: string): string {
  const makeString = str.replace(/[^/a-z]/g, "").toLowerCase();
  return makeString === makeString.split("").reverse().join("") ? "YES" : "NO";
}

console.log(solution3_2("asdswea"));
console.log(solution3_2("assa"));
console.log(solution3_2("found7, time: study; Yduts; emit, 7Dnuof"));
