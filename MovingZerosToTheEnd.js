//TASK
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, i);
      arr.push(0);
    }
  }
  return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
