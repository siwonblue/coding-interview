const src = [1, 2, 3];
const n = 2;
const isUsed = Array.from({ length: n }, () => 0);
const permutation = Array.from({ length: n }, () => 0);

function getPermutation(l) {
  if (l === n) {
    console.log([...permutation]);
    return;
  }

  for (let i = 0; i < src.length; i++) {
    if (isUsed[i]) continue;
    isUsed[i] = true;
    permutation[l] = src[i];
    getPermutation(l + 1);
    isUsed[i] = false;
  }
}
getPermutation(0);
