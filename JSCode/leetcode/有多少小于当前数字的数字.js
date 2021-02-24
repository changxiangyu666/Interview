/**
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 *输入：nums = [8,1,2,2,3]
 输出：[4,0,1,1,3]
 解释：
 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
 对于 nums[1]=1 不存在比它小的数字。
 对于 nums[2]=2 存在一个比它小的数字：（1）。
 对于 nums[3]=2 存在一个比它小的数字：（1）。
 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const cnt = new Array(101).fill(0);
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        cnt[nums[i]] += 1;
    }
    for (let i = 1; i <= 100; ++i) {
        cnt[i] += cnt[i - 1];
    }
    const ret = [];
    for (let i = 0; i < n; ++i) {
        ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
    }
    return ret;

};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
