/*
 * @lc app=leetcode id=2353 lang=javascript
 *
 * [2353] Design a Food Rating System
 */

const { PriorityQueue } = require('@datastructures-js/priority-queue')

/**
 * tags: #priority-queue
 */

// @lc code=start
/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
  this.foodMap = new Map(); // food -> { cuisine, rating }
  this.cuisineMap = new Map(); // cuisine -> priority queue of { food, rating }

  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    const cuisine = cuisines[i];
    const rating = ratings[i];

    this.foodMap.set(food, { cuisine, rating });

    if (!this.cuisineMap.has(cuisine)) {
      this.cuisineMap.set(
        cuisine, 
        new PriorityQueue((a, b) => {
          if (a.rating === b.rating) {
            return a.food.localeCompare(b.food);
          }
          return b.rating - a.rating;
        })
      )
    }
    this.cuisineMap.get(cuisine).enqueue({ food, rating });
  }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
  const toUpdate = this.foodMap.get(food);
  toUpdate.rating = newRating;
  this.foodMap.set(food, toUpdate);
  this.cuisineMap.get(toUpdate.cuisine).enqueue({ food, rating: newRating });
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
  const pq = this.cuisineMap.get(cuisine);

  while (!pq.isEmpty()) {
    const { food, rating } = pq.front();
    if (this.foodMap.get(food).rating === rating) {
      return food;
    }
    pq.dequeue();
  }
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
// @lc code=end
