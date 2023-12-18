/**
 * Time Limit Exceeded
 * 73 / 77 testcases passed
 */

class FoodRatings {
  hash = new Map();
  f;
  c;

  constructor(foods, cuisines, ratings) {
    this.f = [...foods];
    this.c = [...cuisines];
    const cusines_ = Array.from(new Set([...cuisines]));
    for (let i = 0; i < cusines_.length; i++) {
      if (!this.hash.get(cusines_[i])) {
        // timeout
        this.hash.set(cusines_[i], []);
        this.hash.set(`${cusines_[i]}Scores`, []);
      }
    }

    for (let i = 0; i < cuisines.length; i++) {
      this.hash.set(cuisines[i], [...this.hash.get(cuisines[i]), foods[i]]);
      this.hash.set(`${cuisines[i]}Scores`, [
        ...this.hash.get(`${cuisines[i]}Scores`), // time out
        ratings[i],
      ]);
    }
    // console.log(this.hash);
  }

  // time out
  highestRated(cuisine) {
    const highestRate = Math.max(...this.hash.get(`${cuisine}Scores`));

    //여러개인지 체크
    const indices = [];
    for (let i = 0; i < this.hash.get(`${cuisine}Scores`).length; i++)
      if (this.hash.get(`${cuisine}Scores`)[i] === highestRate) indices.push(i);

    if (indices.length === 1) {
      const idx = this.hash.get(`${cuisine}Scores`).indexOf(highestRate);
      return this.hash.get(cuisine)[idx];
    }

    const src = [];
    for (let i = 0; i < indices.length; i++)
      src.push(this.hash.get(cuisine)[indices[i]]); // 시간 초과 위험한데 O(N N) = 4 * 10^8
    return src.sort()[0];
  }

  // time ok.
  changeRating(food, newRating) {
    // find typeof food
    const idx = this.f.indexOf(food);
    const type = this.c[idx];
    // 새로운 자료구조에서 다시 검색
    const idx_ = this.hash.get(type).indexOf(food);
    this.hash.get(`${type}Scores`)[idx_] = newRating;
    console.log(this.hash);
  }
}
foodRatings = new FoodRatings(
  ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
  ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
  [9, 12, 8, 15, 14, 7]
);
foodRatings.highestRated("korean"); // return "kimchi"
// "kimchi" is the highest rated korean food with a rating of 9.
foodRatings.highestRated("japanese"); // return "ramen"
// "ramen" is the highest rated japanese food with a rating of 14.
foodRatings.changeRating("sushi", 16); // "sushi" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "sushi"
// "sushi" is the highest rated japanese food with a rating of 16.
foodRatings.changeRating("ramen", 16); // "ramen" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "ramen"
// Both "sushi" and "ramen" have a rating of 16.
// However, "ramen" is lexicographically smaller than "sushi".
