function pigIt(str) {
  newString = str.replace(/(\b\w)(\w*)\b/g, "$2$1ay");

  return newString;
}

console.log(pigIt("Pig latin is cool"));
