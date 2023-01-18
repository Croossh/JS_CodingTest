function solution3_3(str: string): number {
  const answer = parseInt(
    str
      .split("")
      .filter((item) => !isNaN(Number(item)))
      .join("")
  );
  return answer;
}

console.log(solution3_3("g0en2T0s8eSoft"));
// isNaN메서드는 NaN일때 true가나온다. 반드시 헷갈리지 말도록!!!
