function sortStrChars(str) {
    if (!str) {
      return;
    }
    str = str.split('').sort().join('');
    return str;
  }
  
  const words = ["nap", "teachers", "cheaters", "PAN", "ear", "era",
  "hectares"];
  
  function getGroupedAnagrams(words) {
    const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
    words.forEach((word) => {
      const sortedWord = sortStrChars(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }
  
  const groupedAnagrams = getGroupedAnagrams(words);
  for (const sortedWord in groupedAnagrams) {
    console.log(groupedAnagrams[sortedWord].toString());
  }
