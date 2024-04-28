/**
 * @param {number[]} nums
 * @return {number}
 */

 var findDuplicate = function(nums) {
    // Create a boolean array to keep track of visited elements
    let visited = new Array(nums.length).fill(false);
    
    // Iterate through the nums array
    for (let n of nums) {
        // If the element has not been visited yet, mark it as visited
        if (!visited[n]) {
            visited[n] = true;
        } else {  // If the element has already been visited, it's the duplicate
            return n;
        }
    } 
    return 0; // This line is unreachable, can be removed
};