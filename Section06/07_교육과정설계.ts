function solution6_7(str1: string, str2: string): string {
  const arr = str1.split("");
  const arr2 = str2.split("");

  for (let i = 0; i < arr.length; i++) {
    while (arr2.length !== 0) {
      if (arr[i] !== arr2[0]) {
        arr2.shift();
      } else {
        arr2.shift();
        break;
      }
    }
  }
  return arr2.length !== 0 ? "YES" : "NO";
}

console.log(solution6_7("CBA", "CBDAGE")); // YES
console.log(solution6_7("CBA", "CGEADB")); // NO
