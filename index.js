const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(title => {
    let words = title.split(" ");

    // Capitalize each word, handling special cases
    let capitalizedWords = words.map(word => {
      // Lowercase words that should remain lowercase
      const lowercaseWords = ["and", "or", "the", "of", "in", "a", "an"];
      if (lowercaseWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }

      // Uppercase acronyms and other specific words
      switch (word.toLowerCase()) {
        case "oo":
        case "api":
        case "jsonp":
          return word.toUpperCase();
        default:
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    return capitalizedWords.join(" ");
  });
}

// Test the function
console.log(titleCased());
