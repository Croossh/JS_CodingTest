#회고

## <7번 아나그램(해쉬)>

⏩ [7번 풀이 보러가기](<https://github.com/Croossh/TS_CodingTest/blob/f19d7bf8e093fc4ebbaab56c2afc0e79fb068ff4/Section05/07_%EC%95%84%EB%82%98%EA%B7%B8%EB%9E%A8(%ED%95%B4%EC%89%AC).ts>)<br>
두단어의 구성이 일치하는 지의 판단 여부 문제이다.<br>

```typescript
const map1 = new Map();

for (let i = 0; i < size; i++) {
  if (map1.has(str1[i])) {
    map1.set(str1[i], map1.get(str1[i]) + 1);
  } else {
    map1.set(str1[i], 1);
  }
}
```

- `Map`을 사용해서 기존에 키가 없다면 1을 `set` 해주고 기존에 키가 있다면 `+1` 을 해주고 다시 set을 했다.<br>
- Map 자료구조 특성상 `key`는 중복될 수 없기 때문에 이런 점을 이용했다.
-

```typescript
for (let i = 0; i < size; i++) {
  if (!map1.has(str2[i]) || map1.get(str2[i]) === 0) {
    return "NO";
  } else {
    map1.set(str1[i], map1.get(str2[i]) - 1);
  }
}
```

- 이후 두번째 `for`문에서 키가 없거나, 값이 `0`이라면 바로 `NO`를 리턴하고 있다면 값을 `-1` 시켜주는 방식으로 탐색했다.

### 다른방법은 없을까?

문제 자체가 `Hash` 자료구조를 이용하라 했지만 방법도 구현 해보고 싶었다.

```typescript
const answer1 = str1.split("").sort().join("");
const answer2 = str2.split("").sort().join("");
return answer1 === answer2 ? "YES" : "NO";
```

- 간단하게 각 문자열을 나눈뒤 정렬해주고 `join` 해주었다.
  => 배열을 그대로 비교하면 주소값만 비교하기때문에 `join`을 해준것!<br>
- 두 풀이 모두 시간 복잡도는 같아보인다.
