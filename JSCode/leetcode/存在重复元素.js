/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const number=[];
    let f = false;
    nums.forEach((item)=>{
        if(number.indexOf(item)!==-1){
            f = true;
        }
        number.push(item);
    })
    return f;
};

var containsDuplicate1 = function(nums) {
    return nums.length > new Set(nums).size
};
console.log(containsDuplicate1([1,2,3,4]));
console.log(containsDuplicate([1,2,3,4]));
