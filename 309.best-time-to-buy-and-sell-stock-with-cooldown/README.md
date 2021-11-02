# Dynamic Programming with State Machine

## Algorithm

```java
sold[i] = held[i - 1] + prices[i]
held[i] = max(held[i - 1], reset[i - 1] - prices[i])
reset[i] = max(reset[i - 1], sold[i - 1])
```

所以對於每一天i，都有可能是三種狀態：

1. 不持股且當天沒賣出,定義其最大收益 `dp[i][0]`
2. 持股,定義其最大收益 `dp[i][1]`
3. 不持股且當天賣出了，定義其最大收益 `dp[i][2]`

初始化：
`dp[0][0]=0;` //本來就不持有，啥也沒幹
`dp[0][1]=-1*prices[0];` //第0天只買入
`dp[0][2]=0;` //可以理解成第0天買入又賣出，那麼第0天就是“不持股且當天賣出了”這個狀態了，其收益為0，所以初始化為0是合理的
