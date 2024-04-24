/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    //First, we iterate through the input array and count the occurrences of each number (0, 1 & 2).
    // count  of 0s, 1s and 2s
    let count=[0,0,0]
    //After counting the occurrences, we iterate through the input array again.
    // count the occurrence of each number

for(let num of nums) count[num]++
//Once we have iterated through the entire input array, we have successfully overwritten the original array with the sorted elements in the correct order.

let index=0

     for(let i=0; i<count.length; i++){
while(count[i]>0){
nums[index]=i
count [i]--
index++
}
    }
}; 
