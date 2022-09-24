/**
 *
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
 function merge(A, m, B, n) {
    // write code here
    let aPointer = 0;
    let bPointer = 0;
    while (bPointer < n && aPointer < A.length) {
      if (A[aPointer] < B[bPointer]) {
        aPointer++;
        continue;
      }
      A.splice(aPointer, 0, B[bPointer]);
      aPointer++;
      bPointer++;
    }
    if (bPointer < n) {
      A.push(...B.slice(bPointer, n));
    }
  }
  module.exports = {
    merge: merge,
  };
  