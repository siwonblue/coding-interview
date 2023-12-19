/**
 * Time Limit Exceeded
 * 73 / 77 testcases passed
 */

class FoodRatings {
  foodRatings = new Map();
  foodCuisines = new Map();

  constructor(foods, cuisines, ratings) {
    for (let i = 0; i < foods.length; i++) {
      this.foodRatings.set(foods[i], ratings[i]);
      this.foodCuisines.set(foods[i], cuisines[i]);
    }
  }

  highestRated(cuisine) {}

  changeRating(food, newRating) {}
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
