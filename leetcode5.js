//@param {number[]} nums
 //@return {number[]}
 

 //Use 2 arrays left and right, in which left[i] is product of all the elements from nums[0] to nums[i-1]
 // and right[i] is product of all the elements from nums[i+1] to nums[n-1] (n == nums.length).
 // So we have result[i] = left[i] * right[i].


 var productExceptSelf = function(nums) {
    const left = [];
     const right = [];
     let l = 1;
     let r = 1;
     for (let i = 0; i < nums.length; i++) {
         left.push(l);
         right.push(0);
         l *= nums[i];
     }
     for (let i = nums.length - 1; i >= 0; i--) {
         right[i] = r;
         r *= nums[i];
     }
     // console.log(left);
     // console.log(right);
     const result = [];
     for (let i in nums) {
         result.push(left[i] * right[i]);
     }
     return result;
 }; 
 
 
 
 