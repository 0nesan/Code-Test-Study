const selectionSort = (k) => {
  for (let i = 0; i < k.length; i++) {
    let minIndex = i; // 지금 맨 왼쪽에 위치한 인덱스
    for (let j = i + 1; j < k.length; j++) {
      // 오른쪽 원소중 가장 작은 인덱스 구함
      if (k[minIndex] > k[j]) {
        minIndex = j;
      }
    }
    // 위치 변경을 위해 바뀔 값을 미리 저장해둠
    let temp = k[i];
    // 위치 변경
    k[i] = k[minIndex];
    k[minIndex] = temp;
  }

  return k;
};

// console.log(selectionSort([2, 4, 3, 1, 9, 6, 8, 7, 5]));

const bubbleSort = (k) => {
  for (let i = 0; i < k.length; i++) {
    for (let j = 0; j < k.length; j++) {
      if (k[j] > k[j + 1]) {
        let temp = k[j + 1];
        k[j + 1] = k[j];
        k[j] = temp;
      }
    }
  }

  return k;
};

// console.log(bubbleSort([2, 4, 3, 1, 9, 6, 8, 7, 5]));

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};
// console.log(insertionSort([2, 4, 3, 1, 9, 6, 8, 7, 5]));

const mergeSortFn = (arr) => {
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
  }

  function merge(left, right) {
    console.log(left, right);
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    return result;
  }

  return mergeSort(arr);
};

console.log();
mergeSortFn([2, 4, 3, 1, 9, 6, 8, 7, 5]);
