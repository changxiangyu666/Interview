/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 请返回 nums 的动态和。
 示例 1：
 输入：nums = [1,2,3,4]
 输出：[1,3,6,10]
 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let nums1=[];
    let num=0;
    nums.forEach(value=>{
        nums1.push(num+=value);
    });
    return nums1;
};

var runningSum1 = function(nums) {
    let num = null;
    let result = nums.map((item) => (num += item));
    return result;
};
console.log(runningSum([1,2,3,4]))
