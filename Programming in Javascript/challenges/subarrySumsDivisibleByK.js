/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let number = 0;
    for(var i = 0; i < nums.length; i++) {
        let new_arr = [nums[i]]
        if (nums[i] % k == 0){
            console.log(new_arr)
            number += 1
        }
        for(var j = i+1; j<nums.length; j++){
            new_arr.push(nums[j])
            if (sum(new_arr) % k == 0){
                console.log(new_arr)
                number += 1;
            }
        }
    }
    return number;
};

function sum(arr) {
    let summ = 0;
    for (var i = 0; i< arr.length; i++){
        summ += arr[i]
    }
    return summ;
}


let nums = [4,5,0,-2,-3,1]
let k = 5

const numOfSub = subarraysDivByK([5], 9)
console.log(`There are ${numOfSub} subarrays with a sum divisible by k = 5`)