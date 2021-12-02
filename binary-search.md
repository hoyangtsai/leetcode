# Binary Search

tags: #binary-search

## 零、二分查找框架

```c++
int binarySearch(int[] nums, int target) {
    int left = 0, right = ...;

    while(...) {
        // Prevent (left + right) overflow
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
```

**分析二分查找的一個技巧是：不要出現 else，而是把所有情況用 else if 寫清楚，這樣可以清楚地展現所有細節**。

其中 `...` 標記的部分，就是可能出現細節問題的地方，當你見到一個二分查找的代碼時，首先注意這幾個地方。後文用實例分析這些地方能有什麼樣的變化。

另外聲明一下，計算 mid 時需要防止溢出，代碼中 `left + (right - left) / 2` 就和 `(left + right) / 2` 的結果相同，但是有效防止了 `left` 和 `right` 太大直接相加導致溢出。

## 一、尋找一個數（基本的二分搜索）

```c++
int binarySearch(int[] nums, int target) {
    int left = 0; 
    int right = nums.length - 1; // 注意

    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(nums[mid] == target)
            return mid; 
        else if (nums[mid] < target)
            left = mid + 1; // 注意
        else if (nums[mid] > target)
            right = mid - 1; // 注意
    }
    return -1;
}
```

1、為什麼 while 循環的條件中是 <=，而不是 <？

答：因為初始化 `right` 的賦值是 `nums.length - 1`，即最後一個元素的索引，而不是 `nums.length`。

這二者可能出現在不同功能的二分查找中，區別是：前者相當於兩端都閉區間 `[left, right]`，後者相當於左閉右開區間 `[left, right)`，因為索引大小為 `nums.length` 是越界的。

我們這個算法中使用的是前者 `[left, right]` 兩端都閉的區間。**這個區間其實就是每次進行搜索的區間**。

3、此算法有什麼缺陷？

答：至此，你應該已經掌握了該算法的所有細節，以及這樣處理的原因。但是，這個算法存在侷限性。

比如說給你有序數組 `nums = [1,2,2,2,3]`，`target` 為 2，此算法返回的索引是 2，沒錯。但是如果我想得到 `target` 的左側邊界，即索引 1，或者我想得到 `target` 的右側邊界，即索引 3，這樣的話此算法是無法處理的。

## 二、尋找左側邊界的二分搜索

因此每次循環的「搜索區間」是 `[left, right)` 左閉右開。

```c++
int left_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0;
    int right = nums.length; // 注意

    while (left < right) { // 注意
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    return left;
}
```

6、能不能想辦法把right變成nums.length - 1，也就是繼續使用兩邊都閉的「搜索區間」？這樣就可以和第一種二分搜索在某種程度上統一起來了。

答：當然可以，只要你明白了「搜索區間」這個概念，就能有效避免漏掉元素，隨便你怎麼改都行。下面我們嚴格根據邏輯來修改：

```c++
int left_bound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    // 搜索區間為 [left, right]
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            // 收縮右側邊界
            right = mid - 1;
        } else if (nums[mid] < target) {
            // 搜索區間變為 [mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索區間變為 [left, mid-1]
            right = mid - 1;
        } 
    }
    // 檢查出界情況
    if (left >= nums.length || nums[left] != target)
        return -1;
    return left;
}
```

## 三、尋找右側邊界的二分查找

```c++
int right_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0, right = nums.length;

    while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            left = mid + 1; // 注意
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return left - 1; // 注意
}
```

3、為什麼沒有返回 -1 的操作？如果 `nums` 中不存在 `target` 這個值，怎麼辦？

答：類似之前的左側邊界搜索，因為 while 的終止條件是 `left == right`，就是說 `left` 的取值範圍是 `[0, nums.length]`，所以可以添加兩行代碼，正確地返回 -1：

```c++
while (left < right) {
    // ...
}
if (left == 0) return -1;
return nums[left-1] == target ? (left-1) : -1;
```

4、是否也可以把這個算法的「搜索區間」也統一成兩端都閉的形式呢？這樣這三個寫法就完全統一了，以後就可以閉著眼睛寫出來了。

答：當然可以，類似搜索左側邊界的統一寫法，其實只要改兩個地方就行了：

```c++
int right_bound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            // 這裡改成收縮左側邊界即可
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } 
    }
    // 這裡改為檢查 right 越界的情況，見下圖
    if (right < 0 || nums[right] != target)
        return -1;
    return right;
}
```

Source:

- [https://mp.weixin.qq.com/s/M1KfTfNlu4OCK8i9PSAmug](https://mp.weixin.qq.com/s/M1KfTfNlu4OCK8i9PSAmug)
- [https://labuladong.gitbook.io/algo/mu-lu-ye/er-fen-cha-zhao-xiang-jie](https://labuladong.gitbook.io/algo/mu-lu-ye/er-fen-cha-zhao-xiang-jie)

## Binary Search Template

### Template #1

```javascript
// Pre-processing

left = 0, right = length - 1;
while (left <= right) {
    mid = left + (right - left) / 2;
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

// left == right + 1;
// No more candidate
```

right < left between the target's index

i.e. (nums = [-1, 0, 3, 5, 9, 12], target = 6) => return left = 4, right = 3

### Template #2

```javascript
// Pre-processing

left = 0, right = length;
while (left < right) {
    mid = left + (right - left) / 2;
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] < target) {
        left = mid + 1;
    } else {
        right = mid;
    }
}

// left == right;
// 1 more candidate
// Post-processing
```

index of left and right = index - 1 of the target

i.e. (nums = [-1, 0, 3, 5, 9, 12], target = 6) => return left = 4, right = 4

### Template #3

```javascript
// Pre-processing

left = 0, right = length - 1;
while (left + 1 < right) {
    mid = left + (right - left) / 2;
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] < target) {
        left = mid;
    } else {
        right = mid;
    }
}

// left + 1 == right
// 2 more candidate
// Post-processing
```

left < right between the target's index

i.e. (nums = [-1, 0, 3, 5, 9, 12], target = 6) => return left = 3, right = 4
