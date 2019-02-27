//given an array find the sum of all items in array.

function simpleArraySum(ar){
    var sum = 0;
    for (var i = 0; i <= ar.length; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(simpleArraySum([1,2,3]));