function solution5_6(str: string): string {
  const map = new Map();
  // const selectArr = str.split("");
  let max = 0;
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

console.log(solution5_6("BACBACCACCBDEDE"));
