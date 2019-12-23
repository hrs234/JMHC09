moveOneWord = (input, many) => {
  let word = input.split(" ");
  let count = 0;
  if (many == 1) {
    return 0;
  }
  for (let a = 0; a <= many - 1; a++) {
    if (a == many - 1) {
      count++;
    } else {
      count = count + (word[a].length + 1);
    }
  }
  return count;
};

reverseOneWord = (input, many) => {
  let word = input.split(" ");
  return word;
};

cursorer = words => {
  let getCodes = words.split(" ")[0];
  let moveWord = 1;
  for (let initMove = 1; initMove <= getCodes.length; initMove++) {
    if (getCodes[initMove] == "w") {
      moveWord++;
    }
  }

  let finalCount = 1;

  for (let init = 0; init <= getCodes.length - 1; init++) {
    if (getCodes[init] == "l") {
      finalCount++;
    } else if (getCodes[init] == "h") {
      finalCount--;
    } else if (getCodes[init] == "w") {
      finalCount = moveOneWord(words, moveWord) + finalCount;
    } else if (getCodes[init] == "b") {
      // TODO
    }
  }

  return finalCount;
};

console.log(cursorer("ll aku mau hidup seribu tahun lagi"));
console.log(cursorer("h robohnya surau kami"));
console.log(cursorer("wh kaki yang terhormat"));
