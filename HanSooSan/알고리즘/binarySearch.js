// 이진탐색으로 target 찾기
const solution = (target, arr) => {
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) return mid;

    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  answer = mid;

  return answer;
};

// console.log(solution(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

// 이진탐색으로 target 갯수 구하기 백준 숫자카드도 같은 방식으로 풀 수 있음.
const solution1 = (target, arr) => {
  let answer = 0;

  const leftFn = (left, right) => {
    while (left < right) {
      let mid = parseInt((left + right) / 2);

      if (target <= arr[mid]) right = mid;
      else left = mid + 1;
    }
    return right;
  };

  const rightFn = (left, right) => {
    while (left < right) {
      let mid = parseInt((left + right) / 2);

      if (target < arr[mid]) right = mid;
      else left = mid + 1;
    }
    return right;
  };

  answer = rightFn(0, arr.length - 1) - leftFn(0, arr.length - 1);

  return answer;
};

// console.log(solution1(4, [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]));

// 백준 예산 문제
const solution2 = (n, m, arr) => {
  let answer;
  let left = 0;
  let right = Math.max(...arr);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let total = 0;
    for (x of arr) {
      total += Math.min(mid, x);
    }
    if (total <= m) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

// console.log(solution2(4, 485, [120, 110, 140, 150]));

// 백준 나무 자르기 문제
const solution3 = (n, m, arr) => {
  let answer;
  let left = 0;
  let right = Math.max(...arr);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let total = 0;
    for (x of arr) {
      if (x > mid) total += x - mid;
    }

    if (total >= m) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

// console.log(solution3(4, 7, [20, 15, 10, 17]));

// 백준 랜선 자르기 문제
const solution4 = (k, n, arr) => {
  let answer;
  let left = 0;
  let right = Math.max(...arr);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let total = 0;

    for (x of arr) {
      if (x > mid) total += parseInt(x / mid);
    }

    if (total < n) {
      right = mid - 1;
    } else {
      answer = mid;
      left = mid + 1;
    }
  }

  return answer;
};

console.log(solution4(4, 11, [802, 743, 457, 539]));
