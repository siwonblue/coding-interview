let arr = [1, -2, 2, 3, -3, 5, 6, -6];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > 0 && arr[j + 1] < 0)
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  }
  console.log(arr);
}
