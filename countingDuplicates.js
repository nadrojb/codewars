function duplicateCount(text) {
    let seen = new Set();      
    let duplicates = new Set(); 
    for (let i = 0; i < text.length; i++) {
      let character = text.charAt(i).toLowerCase(); 
      if (seen.has(character)) {
        duplicates.add(character); 
      } else {
        seen.add(character); 
      }
    }
    return duplicates.size; 
  }
  
  console.log(duplicateCount("aabbnn")); 
  