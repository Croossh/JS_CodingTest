# 회고

## <1번 올바른 괄호(스택)>

⏩ [1번 풀이 보러가기](https://github.com/Croossh/TS_CodingTest/blob/e32792b363c1b14af6b2525c417bc11c3e1c4482/Section06/01_%EC%98%AC%EB%B0%94%EB%A5%B8%EA%B4%84%ED%98%B8.ts)<br>
괄호의 짝이 올바르게 이루어져있는지 판단하는 문제이다.<br>

처음 문제를 봤을땐 괄호의 갯수만 판단하면 끝나는 문제로 생각했었다.

```typescript
let left = 0;
let right = 0;
for (let i = 0; i < str.length; i++) {
  str[i] === "(" ? left++ : right++;
}
return left === right ? "YES" : "NO";
```

- 하지만 입력의 짝은 맞으나, 순서가 잘못됐다면 어떨까?

```javascript
입력: )()()(
출력: "YES" // 오답!!!
```

- 이렇다면 짝은 맞으나 순서가 잘못되었기 때문에 스택을 이용해서 짜는 것이 효율적일 것이라 판단되었다.

```typescript
const answer: string[] = [];
for (let item of str) {
  if (item === "(") {
    answer.push(item);
  } else {
    if (answer.length === 0) return "NO";
    answer.pop();
  }
}
return answer.length === 0 ? "YES" : "NO";
```

- 이렇게 된다면 `(` 를 만났을때만 스택에 추가해주고, `)`를 만난다면 `pop`을 해준다.
- 만약 배열에 아무것도 없는데 닫는괄호가 나온다면 짝이 맞지않는것이기 때문에 바로 "NO"를 리턴하는 로직이다!
- 마지막에 stack이 `0`이라면 모든 짝이 맞는 것이므로 "YES"!!
  <br>
  느낀점<br>

1. 기본적인 stack의 구조에 대해 이해할 수 있는 문제였다.
2. 삽입, 삭제는 시간복잡도가 O(1)로 배열의 크기에 상관없이 효율적인 알고리즘을 짤 수 있다!
