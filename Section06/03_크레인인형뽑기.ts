function solution6_3(board: Array<number[]>, moves: number[]) {
  let count: number = 0;
  const stack: number[] = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1]) {
        stack.push(...board[j].splice(moves[i] - 1, 1, 0));
        break;
      }
    }
    while (true) {
      if (stack.length === 0) break;
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
        count++;
      } else {
        break;
      }
    }
  }

  return count * 2;
}

console.log(
  solution6_3(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

console.log(
  solution6_3(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [1, 2, 2, 1],
    ],
    [2, 3, 1, 4, 2, 3]
  )
);
