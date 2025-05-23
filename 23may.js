/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    if(!arr) return null;
    /* using two pointer approach */
    let i=0,j=arr.length-1;
    while(i<j){
        if(arr[i] + arr[j] > target){
            j--;
        }else if(arr[i] + arr[j] < target) {
            i++
        }else{
            return [i+1, j+1];
        }
    }

};