function getIndexToIns(arr, num) {
  var sortArr = arr.sort((a, b) => a - b); //sorting in ascending order
    for(let a = 0; a < sortArr.length; a++) {
      if(sortArr[a] >= num) {
        return a; //running loop through sorted array and checking that if any index of it is greater or equal to the num given and returning it.
      }
    }
    return sortArr.length; //lastly return the length
}
getIndexToIns([5, 3, 20, 3], 5); //2
