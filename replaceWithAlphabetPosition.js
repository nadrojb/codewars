function alphabetPosition(text) {
  let arr = text.split("");
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].toLowerCase();
    switch (char) {
      case "a":
        string = string.concat("1 ");
        break;
      case "b":
        string = string.concat("2 ");
        break;
      case "c":
        string = string.concat("3 ");
        break;
      case "d":
        string = string.concat("4 ");
        break;
      case "e":
        string = string.concat("5 ");
        break;
      case "f":
        string = string.concat("6 ");
        break;
      case "g":
        string = string.concat("7 ");
        break;
      case "h":
        string = string.concat("8 ");
        break;
      case "i":
        string = string.concat("9 ");
        break;
      case "j":
        string = string.concat("10 ");
        break;
      case "k":
        string = string.concat("11 ");
        break;
      case "l":
        string = string.concat("12 ");
        break;
      case "m":
        string = string.concat("13 ");
        break;
      case "n":
        string = string.concat("14 ");
        break;
      case "o":
        string = string.concat("15 ");
        break;
      case "p":
        string = string.concat("16 ");
        break;
      case "q":
        string = string.concat("17 ");
        break;
      case "r":
        string = string.concat("18 ");
        break;
      case "s":
        string = string.concat("19 ");
        break;
      case "t":
        string = string.concat("20 ");
        break;
      case "u":
        string = string.concat("21 ");
        break;
      case "v":
        string = string.concat("22 ");
        break;
      case "w":
        string = string.concat("23 ");
        break;
      case "x":
        string = string.concat("24 ");
        break;
      case "y":
        string = string.concat("25 ");
        break;
      case "z":
        string = string.concat("26 ");
        break;
    }
  }
  return string.trim();
}

console.log(alphabetPosition("hello this is a string"));
