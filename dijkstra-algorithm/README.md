# Dijkstra Algorithm

- 兩個頂點之間的最短路徑
- **不能**有效處理帶有負權邊的圖（使用 [Bellman-Ford](../bellman-ford-algorithm/README.md) 算法）
- 演算法概念與流程：
  - 一張表格紀錄以下內容 - 點到點的距離、前一個點（回推得知最短路徑）、是否已經存取過節點（Boolean）
  - 距離欄位，與自己本身指定為 0、其餘設定為 Infinity
  - 每次從未標記已存取的節點中，選擇與起點距離最短的節點，標記後收錄到最優路徑集合中
  - 計算剛標記的節點與鄰近節點距離，當前距離 < 先前距離，則更新距離欄位與前一個點。反之，則不更新。

[![最短路径查找—Dijkstra算法](http://img.youtube.com/vi/JLARzu7coEs/0.jpg)](http://www.youtube.com/watch?v=JLARzu7coEs "最短路径查找—Dijkstra算法")
