const target = 3;
const arr = Array.from({ length: target + 1 }, (_, i) => i);
const dp = Array.from({ length: target + 1 }, () => false);

function DFS(n, dp) {
  if (n > target) {
    let ans = "";
    for (let i = 1; i < dp.length; i++) if (dp[i]) ans += `${i} `;
    console.log(ans.trim());
    return;
  }

  const use = [...dp];
  use[n] = true;
  DFS(n + 1, use);
  DFS(n + 1, dp);
}

DFS(1, dp);
