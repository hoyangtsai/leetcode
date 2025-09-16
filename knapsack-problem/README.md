# Knapsack Problem

## 0/1 Knapsack 0/1背包

每件物品只能用一次

## Unbounded Knapsack 無限背包

物品有多個種類，每一種物品都是無限量供應

## Bounded Knapsack 有限背包

物品有多個種類，每一種物品都是有限量供應

## 背包定義

那麼什麼樣的問題可以被稱作為背包問題？換言之，我們拿到題目如何透過題目的不同包裝形式看到裡面背包問題的不變內核呢？

我對背包問題定義的理解：
給定一個背包容量 target，再給定一個數組 nums(物品)，能否按一定方式選取 nums 中的元素得到target

注意：

1. 背包容量 target 和物品 nums 的類型可能是數，也可能是字符串
2. target 可能題目已經給出 (顯式)，也可能是需要我們從題目的信息中挖掘出來 (非顯式, 常見的非顯式 target 比如 sum/2 等)
3. 選取方式有常見的一下幾種：每個元素選一次/每個元素選多次/選元素進行排列組合

那麼對應的背包問題就是下面我們要講的背包分類

背包問題分類：

常見的背包類型主要有以下幾種：

1. 0/1 背包問題：每個元素最多選取一次
2. 完全背包問題：每個元素可以重複選擇
3. 組合背包問題：背包中的物品要考慮順序
4. 分組背包問題：不止一個背包，需要遍歷每個背包

而每個背包問題要求的也是不同的，按照所求問題分類，又可以分為以下幾種：

1. 最值問題：要求最大值/最小值
2. 存在問題：是否存在…，滿足…
3. 組合問題：求所有滿足…的排列組合

因此把背包類型和問題類型結合起來就會出現以下細分的題目類型：

1. 0/1 背包
    1. 最值問題
    2. 存在問題
    3. 組合問題

2. 完全背包
    1. 最值問題
    2. 存在問題
    3. 組合問題

3. 分組背包
    1. 最值問題
    2. 存在問題
    3. 組合問題

背包問題解題模板

首先先了解一下原始背包問題的解題思路和代碼：
最開始的背包問題是「二維動態規劃」

0/1 背包問題母代碼 (二維)

```js
function bags() {
    const weight = [1, 3, 4];   // 各個物品的重量
    const value = [15, 20, 30]; // 對應的價值
    const bagWeight = 4;        // 揹包最大能放下多少重的物品

    // 二維數組：狀態定義: dp[i][j] 表示從 0-i 個物品中選擇不超過 j 重量的物品的最大價值
    const dp = Array.from({ length: weight.length }, () => Array(bagWeight + 1).fill(0));

    // 初始化: 第一列都是 0，第一行表示只選取 0 號物品最大價值
    for (let j = weight[0]; j <= bagWeight; j++) {
        dp[0][j] = dp[0][j - weight[0]] + value[0];
    }

    // weight 數組的大小就是物品個數
    for (let i = 1; i < weight.length; i++) { // 遍歷物品 (第 0 個物品已經初始化)
        for (let j = 0; j <= bagWeight; j++) { // 遍歷揹包容量
            if (j < weight[i]) {
                // 揹包容量已經不足以拿第 i 個物品了
                dp[i][j] = dp[i - 1][j]; // 最大價值就是拿第 i-1 個物品的最大價值
            } else {
                // 揹包容量足夠拿第 i 個物品, 可拿可不拿
                // 拿了最大價值是前 i-1 個物品扣除第 i 個物品的重量的最大價值加上 i 個物品的價值
                // 不拿就是前 i-1 個物品的最大價值, 兩者進行比較取較大的
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }
    console.log(dp[weight.length - 1][bagWeight]);
}
```

二維代碼可以進行優化，去除選取物品的那一層，簡化為一維背包
一維狀態定義： `dp[j]` 表示容量為 j 的背包能放下東西的最大價值

```js
function test_1_wei_bag_problem() {
    const weight = [1, 3, 4];
    const value = [15, 20, 30];
    const bagWeight = 4;
    // 初始化
    const dp = new Array(bagWeight + 1).fill(0);
    for (let i = 0; i < weight.length; i++) { // 遍歷物品
        for (let j = bagWeight; j >= weight[i]; j--) { // 遍歷揹包容量
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]); // 不取或者取第 i 個
        }
    }
    console.log(dp[bagWeight]);
}
```

但是這樣的代碼用來解題顯然還是讓人一頭霧水的，下面給出的解題模板可以很好地將解決這個問題

分類解題模板

背包問題大體的解題模板是兩層循環，分別遍歷物品 nums 和背包容量 target，然後寫轉移方程，
根據背包的分類我們確定物品和容量遍歷的先後順序，根據問題的分類我們確定狀態轉移方程的寫法

首先是背包分類的模板：

 1. 0/1背包：外循環 nums, 內循環 target, target 倒序且 `target>=nums[i]`
 2. 完全背包：外循環 nums, 內循環 target, target 正序且 `target>=nums[i]`
 3. 組合背包(考慮順序)：外循環 target, 內循環 nums, target 正序且 `target>=nums[i]`
 4. 分組背包：這個比較特殊，需要三重循環：外循環背包 bags, 內部兩層循環根據題目的要求轉化為1,2,3三種背包類型的模板

然後是問題分類的模板：

1. 最值問題：`dp[i] = max/min(dp[i], dp[i-nums] + 1)` 或 `dp[i] = max/min(dp[i], dp[i-num] + nums)`
2. 存在問題(bool)：`dp[i] = dp[i] || dp[i-num]`
3. 組合問題： `dp[i] += dp[i-num]`

## Reference

[演算法筆記 - Knapsack Problem](http://web.ntnu.edu.tw/~algo/KnapsackProblem.html#4)

[一篇文章吃透背包问题！（细致引入+解题模板+例题分析+代码呈现）- 力扣](https://leetcode-cn.com/problems/coin-change/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-sq9n/)
