function countChange (money,coins) {
  var m = money, n = coins.length
    var dp = Array(m + 1).fill().map(() => Array(n).fill(0))
    // Fill the entries for money = 0
    for (var i = 0; i < n; i++)
        dp[0][i] = 1

    for (var i = 1; i <= m; i++) {
        for (var j = 0; j < n; j++) {
            // Count of solutions inculding coins[j]
            var x = i - coins[j] >= 0 ? dp[i - coins[j]][j] : 0
            // Count of solutions excluding coins[j]
            var y = j > 0 ? dp[i][j - 1] : 0
            dp[i][j] = x + y
        }
    }
    return dp[m][n-1]
}