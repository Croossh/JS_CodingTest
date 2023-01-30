function solution5_8(str1: string, str2: string): number {
  // let count = 0;
  // for (let i = 0; i < str1.length - str2.length + 1; i++) {
  //   const tmp = str1
  //     .slice(i, i + str2.length)
  //     .split("")
  //     .sort()
  //     .join("");
  //   if (tmp === str2) count++;
  // }

  // return count;

  let answer = 0;
  const size = str2.length;

  const map2 = new Map();
  for (const item of str2) {
    if (map2.has(item)) map2.set(item, map2.get(item) + 1);
    else map2.set(item, 1);
  }

  for (let i = 0; i < str1.length - 2; i++) {
    const map1 = new Map();
    const tmpString = str1.slice(i, i + size);

    let count = 0;
    while (count < size) {
      if (map1.has(tmpString[count])) {
        map1.set(tmpString[count], map1.get(tmpString[count]) + 1);
        count++;
      } else {
        map1.set(tmpString[count], 1);
        count++;
      }
    }
    console.log("즉석 맵", map1);

    for (const [key, value] of map2) {
      if (map1.has[key]) {
        map2.set(key, () => {
          if (value - 1 !== 0) {
            return value + 1;
          }
        });
      } else {
        break;
      } // 여기까지 함
    }
  }

  return 3;
}

console.log(solution5_8("bacaAacba", "abc"));
