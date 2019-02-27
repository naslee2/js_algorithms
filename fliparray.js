var array = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
    ]

function arrayflop(arr){
    let newarr = [];
    for (var i = 0; i < arr[0].length; i++){
        // let array = arr.map( e => e[i]).reverse();
        // let array = arr.map( e => e[i])
        let array = arr.map( e => console.log(e[i]))
        newarr.push(array);
    }
    return(newarr);

}
console.log(arrayflop(array))
