//TASK
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 1 || i == false; i--) {
    if (arr[i] === 0) {
      result.push(0);
    } else {
      result.unshift(arr[i]);
    }
  }
  return result;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
