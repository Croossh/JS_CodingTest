function solution9(str: string): string {
  return str
    .split("")
    .map((item) => {
      if (item === "A") {
        item = "#";
      }
      return item;
    })
    .join("");
}

console.log(solution9("BANANA"));
