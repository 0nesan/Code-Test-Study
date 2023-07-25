const solution = (nums, m) => {
  let answer = 0;
  let lt = 0;
  let rt = nums.length - 1;
  nums.sort((a, b) => a - b);

  while (lt <= rt) {
    if (nums[lt] + nums[rt] <= m) {
      lt++;
      rt--;
      answer++;
    } else {
      answer++;
      rt--;
    }
  }

  return answer;
};

// console.log(solution([90, 50, 70, 100, 60], 140));

const solution1 = (times) => {
  let answer = 0;
  times.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let et = 0;
  for (let x of times) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  console.log(times);

  return answer;
};

console.log(
  solution1([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
