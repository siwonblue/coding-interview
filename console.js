const arr = [1, 2, 3, 4, 5];

// target is 4
const target = arr[3];
const targetIdx = arr.indexOf(target);

// send 4 to first index
for (let i = targetIdx - 1; i >= 0; i--) arr[i + 1] = arr[i];
arr[0] = target;

console.log(arr);
// [4,1,2,3,5]
