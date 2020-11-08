/**
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

 A.length >= 3
 在 0 < i < A.length - 1 条件下，存在 i 使得：
 A[0] < A[1] < ... A[i-1] < A[i]
 A[i] > A[i+1] > ... > A[A.length - 1]
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let length=A.length;
    let left=0;
    let right=length-1;
    while(left+1<length&&A[left]<A[left+1]){
        left++;
    }
    while(right>0&&A[right-1]>A[right]){
        right--;
    }
    return left>0&&right<length-1&&left===right;
};
console.log(validMountainArray([1,4,3,2,1]));
