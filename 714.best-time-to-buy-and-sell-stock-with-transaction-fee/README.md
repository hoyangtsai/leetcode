# Best Time to Buy and Sell Stock with Transaction Fee

## 預備

一般動態規劃思路三步驟：

1. 定義狀態轉移方程
2. 給定轉移方程初始值
3. 寫代碼遞推實現轉移方程

## 實作

### 定義狀態轉移方程

1. 定義二維數組 `dp[n][2]`：

   - `dp[i][0]` 表示第 i 天不持有可獲得的最大利潤
   - `dp[i][1]` 表示第 i 天持有可獲得的最大利潤（注意是第 i 天持有，而不是第 i 天買入）。

2. 定義狀態轉移方程：

   - 不持有：`dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)`

        > 對於今天不持有，可以有兩個狀態轉移過來

     1. 昨天不持有
     2. 昨天持有，今天賣出

        > 兩者取較大值

   - 持有：`dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])`

        > 對於今天持有，可以從兩個狀態轉移過來

    1. 昨天也持有
    2. 昨天不持有，今天買入

        > 兩者取較大值

### 給定轉移方程初始值

對於第 0 天：

- 不持有：`dp[0][0] = 0`
- 持有（即花了 `prices[0]` 的錢買入）：`dp[0][1] = -prices[0]`

來源: <https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/jian-dan-dpmiao-dong-gu-piao-mai-mai-by-tejdo/>
