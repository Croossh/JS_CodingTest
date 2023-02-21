# 회고

## <1번 재귀함수>

⏩ [1번 풀이 보러가기](https://github.com/Croossh/TS_CodingTest/blob/f1dc892da9db22039258b6e3ac073e386b3e7578/Section08/01_%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98.ts)<br>
자연수 N이 주어지면 1부터 N까지 출력하는 문제이다.<br>
반복문을 돌리면되지만 문제의 의도는 재귀함수를 이용하는 것이다.<br>

- 재귀함수는 자기 자신을 호출하는 함수이다.
- 함수 안에 자신을 호출하는 함수호출구문이 있다.
- 반드시 종료 조건을 명시해줘야한다. (그렇지 않으면 무한반복..!)
  <br>

```typescript
function DFS(v: number) {
  if (종료조건) {
    return;
  } else {
    DFS(v - 1);
    // 원하는 실행 구문
  }
}
DFS(n);
```

- 재귀함수는 스택형태로 쌓인다.
- 함수호출부분을 만나면 복귀주소를 스택에 함께 저장해두고 다음 스택을 쌓아간다.
- return문, 즉 종료조건을 만났을때 복귀주소를 따라 스택이 제거(pop)되면서 다음 구문부터 실행된다.
  <br>

```typescript
function solution8_1(n: number): string {
  let answer = "";
  function DFS(v: number) {
    if (v === 0) {
      return;
    } else {
      DFS(v - 1);
      answer += v;
    }
  }
  DFS(n);
  return answer;
}
```

- 해당 재귀함수의 종료조건은 인자가 `0`일때 종료된다.
- `0`이 아닐땐 `-1`을 해주며 자기자신을 호출한다.
- 모든 호출이 끝나고 스택이 제거되면서 `answer += v;` 구문이 차례로 실행된다.
- 스택의 형태이기 때문에 `3, 2, 1` 이 아니라 `1, 2, 3` 형태로 실행된다.
