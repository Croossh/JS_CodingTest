function solution3_4(str: string, type: string): number[] {
  const tmpArr: string[] = str.split("");
  const num = tmpArr.length;
  const answer1: number[] = [];
  const answer2: number[] = [];
  const result: number[] = [];
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < num; i++) {
    tmpArr[i] !== type ? count1++ : (count1 = 0);
    answer1.push(count1);
  }

  for (let j = num - 1; j >= 0; j--) {
    tmpArr[j] !== type ? count2++ : (count2 = 0);
    answer2.push(count2);
  }
  answer2.reverse();

  for (let z = 0; z < tmpArr.length; z++) {
    result.push(Math.min(answer1[z], answer2[z]));
  }

  return result;
}

console.log(solution3_4("teachermode", "e"));
