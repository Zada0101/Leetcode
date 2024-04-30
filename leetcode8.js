@param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}
    let max=-1;
    let r=-1
    for(n of nums){
        obj[n]=obj[n]?++obj[n]:1
        if(obj[n]>max){
            max=obj[n]
            r=n
        }
    }
    return r
};
