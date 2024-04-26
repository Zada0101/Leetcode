
// @param {string} s
// @return {string}
 
 //1.Split the string into words using spaces as delimiters.
//2.Filter out any empty words that appear due to extra spaces in the original string.
//3.Reverse the array of words to change their order.
//4.Join the words back into a string, separating them with a single space.

var reverseWords = function(s) {
    return s.split(' ').filter(el => el).reverse().join(' ')
};