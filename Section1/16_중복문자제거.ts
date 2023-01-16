function solution16(str: string): string {
  const setArr = [...new Set(str)].join("");
  return setArr;
}

console.log(solution16("ksekkset"));

function solution16_1(str: string): string {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer += str[i];
    }
  }
  return answer;
}
console.log(solution16_1("ksekkset"));
