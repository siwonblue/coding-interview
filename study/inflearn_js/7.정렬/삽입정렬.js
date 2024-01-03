let arr = [5, 4, 3, 2, 1];

for (let i = 1; i < arr.length; i++) {
  let temp = arr[i],
    j;
  for (j = i - 1; j >= 0; j--) {
    if (temp < arr[j]) arr[j + 1] = arr[j];
    else break;
  }
  arr[j + 1] = temp;
}
console.log(arr);
