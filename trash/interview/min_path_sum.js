// https://leetcode-cn.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var row = grid.length;
  if (!row) return 0;
  var col = grid[row - 1].length;
  if (!col) return 0;
  var dp = [...grid];
  for (var i = 1; i < row; i++) {
    dp[i][0] = grid[i - 1][0] + grid[i][0];
  }

  for (var i = 1; i < col; i++) {
    dp[0][i] = grid[0][i - 1] + grid[0][i];
  }

  for(var i = 1; i < row; i++) {
    for (var j = 1; j < col; j++) {
      dp[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return dp[row - 1][col - 1];
};


console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]));

console.log(minPathSum([
  [1,4,8,6,2,2,1,7],
  [4,7,3,1,4,5,5,1],
  [8,8,2,1,1,8,0,1],
  [8,9,2,9,8,0,8,9],
  [5,7,5,7,1,8,5,5],
  [7,0,9,4,5,6,5,6],
  [4,9,9,7,9,1,9,0]
]));
