(function solution(id_list, report, k) {
  const reports = [...new Set(report)].map((r) => r.split(" "));
  console.log(reports);
  const counts = new Map();
  for (let report of reports) {
    const bad = report[1];
    counts.set(bad, counts.get(bad) + 1 || 1);
  }
  const goods = new Map();
  for (let report of reports) {
    const good = report[0];
    const bad = report[1];
    if (counts.get(bad) >= k) goods.set(good, goods.get(good) + 1 || 1);
  }
  return id_list.map((name) => goods.get(name) || 0);
})(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
