#회고

## <5번 등수 구하기>

⏩ [5번 풀이 보러가기](https://github.com/Croossh/TS_CodingTest/blob/fc836404bcf0e3b0db0ad0cf350b8379c72c2784/Section02/02_%EB%B3%B4%EC%9D%B4%EB%8A%94%ED%95%99%EC%83%9D.ts)<br>
평범한 등수 구하기 문제이다.<br>
하지만 이중`for`문과 이증 `if`문으로 가독성이 매우 떨어진다.<br>
지금 까지는 `sort`된 배열과 원본 배열을 비교해서 `index + 1`을 해주는 방식이였다면, 새로운 방법을 알게 되었다.<br>

```typescript
let answer = Array.from({ length: 5 }, () => 1);
```

1. `from`메서드를 통해 `1`로만 이루어진 `5`길이의 배열을 만든다.
2. 해당 인덱스에서 다른 요소와 비교했을때 본인이 낮다면 자신의 인덱스에 `+1`을 해준다.
3. 동일점수가 나왔을경우에는 자연스럽게 다음 번호로 넘어가게 된다.

```typescript
for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    if (arr[i] < arr[j]) answer[i]++;
    //비교했을때 점수가 낮을수록 등수가 밀려나도록
  }
}
```

- `if`문이 하나 없어졌지만 가독성이 매우 올라갔다!

## <2번 보이는학생>

⏩ [2번 풀이 보러가기](https://github.com/Croossh/TS_CodingTest/blob/fc836404bcf0e3b0db0ad0cf350b8379c72c2784/Section02/05_%EB%93%B1%EC%88%98%EA%B5%AC%ED%95%98%EA%B8%B0.ts)<br>
이 문제는 사람을 일자로 세워놓았을때 앞의 사람들이 자신보다 작으면 선생님이 볼 수 있고, 그 숫자를 구하는 문제이다.<br>

### 문제

```typescript
function solution2_2(arr: number[]): number {
  let answer: number = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
      answer += 1;
    }
  }
  return answer;
  console.log(solution2_2([130, 135, 148, 140, 145, 150, 150, 153]));
}
```

↑ 원래 풀었던 방식 <br>
처음 이문제를 풀었을때는 바로 앞사람의 키만 고려해서 문제를 풀었다. 하지만 `[..., 148, 140, 145, ...]` 의 경우에 `145`는 `140`에 비해 크지만 `148` 때문에 보이지 않는다.<br>
이 문제를 생각하지 못한채 문제를 풀었으나 정답은 똑같아서 넘어갔던 문제였었다. (문제를 똑바로 읽고 의심을 계속하자)<br>
<br>
이렇게 수정할 수 있었다.

1. `max` 변수를 추가해서 맨 앞 사람의 키를 `max`로 설정해두고,
2. `max`와 비교하며 `max`보다 클경우 `answer`카운트에 `+1`을 해주고
3. 그렇다면 `max`는 현재 인덱스의 키로 변경시킨다.

```typescript
function solution2_2(arr: number[]): number {
  let answer: number = 1;
  let max = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (max < arr[i]) {
      answer += 1;
      max = arr[i];
    }
  }
  return answer;
}
```
