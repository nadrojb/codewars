function generateHashtag(str) {
    if (!str.trim()) {
      return false; 
    }
  
    let arr = str.split(" ");
    let hashtag = "#";
    
    for (let word of arr) {
      let firstLetter = word.charAt(0);
      let newWord = firstLetter.toUpperCase() + word.slice(1);
      hashtag += newWord;


      if (hashtag.length > 140) {
        return false;
      }
    }
  
    return hashtag; 
}
