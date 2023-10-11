const lenOfCache = 5;
const cache = [];
const works = [1, 2, 3, 2, 6, 2, 3, 5, 7];

function solution(works, cache) {
  const len = works.length;
  for (let i = 0; i < len; i++) {
    const curWork = works[i];
    const isHit = cache.indexOf(curWork);

    if (isHit) {
      // use insertion sort to send curWork to first index
      for (let i = isHit - 1; i >= 0; i++) cache[i + 1] = cache[i];
      cache[0] = curWork;
      continue;
    }

    for (let i = isHit - 1; i >= 0; i++) cache[i + 1] = cache[i];
    cache[0] = curWork;
    if (cache.length > lenOfCache) cache.pop();
  }
  console.log(cache);
}
solution(works, cache);
