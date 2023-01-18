function solution3_5(str: string): string {
  const tmpArr = str.split("");

  const countArr = tmpArr.map((item) => {
    let count = 0;
    for (let i = 0; i < tmpArr.length; i++) {
      if (item === tmpArr[i]) count++;
    }
    return count === 1 ? item : item + count;
  });

  return [...new Set(countArr)].join("");
}

console.log(solution3_5("KKHSSSSSSSE"));
