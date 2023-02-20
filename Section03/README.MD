# 회고

## <4번 가장 짧은 문자 거리>

⏩ [4번 풀이 보러가기](https://github.com/Croossh/TS_CodingTest/blob/97b0951cc934a336bae3194ef24d2278620bce75/Section03/04_%EA%B0%80%EC%9E%A5%EC%A7%A7%EC%9D%80%EB%AC%B8%EC%9E%90%EA%B1%B0%EB%A6%AC.ts)<br>
특정 문자의 최소 거리를 재는 문제이다.<br>

```typescript
for (let i = 0; i < num; i++) {
  tmpArr[i] !== type ? count1++ : (count1 = 0);
  answer1.push(count1);
}
```

- for문으로 count를 증가시키다가 특정문자(type)를 만날때 0으로 초기화 시켜주며 거리를 잰다.<br>

```typescript
for (let j = num - 1; j >= 0; j--) {
  tmpArr[j] !== type ? count2++ : (count2 = 0);
  answer2.push(count2);
}
answer2.reverse();
```

- 두번째 for문으로 거꾸로 읽어서 뒤에서부터의 거리를 잰다.<br>
- reverse 메서드로 첫번째 for문의 구한 순서와 동일하게 만들어 준다.<br>

```typescript
for (let z = 0; z < tmpArr.length; z++) {
  result.push(Math.min(answer1[z], answer2[z]));
}
```

- 최솟값을 비교해주면 끝!
