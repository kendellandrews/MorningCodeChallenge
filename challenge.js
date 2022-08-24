// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

const hasUniqueChars = (word) => {
    let unique = true
    let characters = []
  
    for(let i = 0; i < word.length; i++){
      if(characters.includes(word[i])){
        unique = false
        break
      } else {
        characters.push(word[i])
      }
    }
  
    return unique
  }
  
  console.log(hasUniqueChars('Monnday'))