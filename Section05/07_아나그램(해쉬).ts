function solution5_7(str1: string, str2: string): string {
  const size = str1.length;

  const map1 = new Map();

  for (let i = 0; i < size; i++) {
    if (map1.has(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }
  }

  for (let i = 0; i < size; i++) {
    if (!map1.has(str2[i]) || map1.get(str2[i]) === 0) {
      return "NO";
    } else {
      map1.set(str1[i], map1.get(str2[i]) - 1);
    }
  }

  return "YES";
}

console.log(solution5_7("AbaAeCe", "baeeACA"));
console.log(solution5_7("abaCC", "Caaab"));
