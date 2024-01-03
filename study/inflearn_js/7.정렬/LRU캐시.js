const cacheSize = 5;
const data = [1, 2, 3, 2, 6, 2, 3, 5, 7];
const cache = Array.from({ length: cacheSize }, () => 0);

for (let i = 0; i < data.length; i++) {
  const now = data[i];
  let pos = -1;

  for (let j = 0; j < cache.length; j++) if (cache[j] === now) pos = j;

  if (pos === -1) {
    for (let j = cache.length - 1; j >= 1; j--) {
      cache[j] = cache[j - 1];
    }
  } else {
    for (let j = pos; j >= 1; j--) {
      cache[j] = cache[j - 1];
    }
  }
  cache[0] = now;
}
