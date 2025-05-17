/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity; // ekdom shuru te highest dhore nilam
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];

    if (price < minPrice) {
      minPrice = price; // jodi notun kom price pai, eta buy korar jonno best
    } else {
      let profit = price - minPrice; // ajke sell korle ei taka profit hobe
      maxProfit = Math.max(maxProfit, profit); // beshi profit pele update korbo
    }
  }
  console.log(maxProfit);
  return maxProfit;
};
maxProfit((prices = [7, 1, 5, 3, 6, 4]));
