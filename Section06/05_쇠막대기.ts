function solution6_5(str: string): number {
  const stack: string[] = [];
  let count = 0;
  let answer = 0;
  let startIndex = 0;
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
      // 시작 인덱스 설정
      if (flag) {
        startIndex = i;
        flag = false;
      }
    } else {
      if (!stack.includes("(")) continue;
      stack.pop();
      // 모든 괄호가 맞아 떨어질때
      if (stack.length === 0) {
        for (let j = startIndex; j < i; j++) {
          if (str[j + 1] === "(" && str[j + 2] === ")") count++;
        }
        if (count !== 0) answer += count + 1;
        // 초기화 부분
        count = 0;
        flag = true;
        i = startIndex;
      }
    }
  }
  return answer;
}

console.log(solution6_5("()(((()())(())()))(())"));
console.log(solution6_5("(((()(()()))(())()))(()())"));
