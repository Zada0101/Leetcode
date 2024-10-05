var plusOne = function(digits) {
    let [carry, idx, nums] = [1, digits.length-1, [...digits]]

    while(carry){
        const val = nums[idx] + carry
        if( val === 10){
            nums[idx] = 0
            if(idx === 0){
                nums.unshift(carry)
                carry = 0
                }
        }else{
            nums[idx] = val
            carry = 0
        }
        idx--
    }

    return nums
};  
// Reverse Integer
var reverse = function(x) {
    var INT_MAX = 2147483647;
    var INT_MIN = - INT_MAX - 1;
    var res = 0;
    var num = x;
    while (num !== 0) {
      res = (res * 10) + (num % 10);
      num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
      if (res > INT_MAX || res < INT_MIN) return 0;
    }
    return res;
  };

  console.log(reverse(-123));