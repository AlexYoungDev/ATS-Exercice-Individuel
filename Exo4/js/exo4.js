
const latinToMorse = {
  'A':'.-',
  'B':'-...',
  'C':'-.-.',
  'D':'-..',
  'E':'.',
  'F':'..-.',
  'G':'--.',
  'H':'....',
  'I':'..',
  'J':'.---',
  'K':'-.-',
  'L':'.-..',
  'M':'--',
  'N':'-.',
  'O':'---',
  'P':'.--.',
  'Q':'--.-',
  'R':'.-.',
  'S':'...',
  'T':'-',
  'U':'..-',
  'V':'...-',
  'W':'.--',
  'X':'-..-',
  'Y':'-.--',
  'Z':'--..'
}

const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
};

function decode() //q4
getMorseCharacterList

function translateMorseCharacter(lettre) {
  let semor =
  return semor
}
 

function encode(texte){ //q3
 let list = 
 getLatinCharacterList(texte.toUpperCase())
 for (let i = 0; i < list.length; i++) {
  let b = list [i]
  console.log(b)
  translateLatinCharacter(b)
  let c = translateLatinCharacter(b)
  console.log(c)
 }
}

function translateLatinCharacter //q2
(caratere) {
  let morse = latinToMorse[caractere];
  return morse;
}

function getLatinCharacterList //q1
(mots) {
  console.log(mots.split(""))
}
getLatinCharacterList("hello world")

// let cou = getLatinCharacterList
// ("hello world")
// console.log(translateLatinCharacter
// ("A"))
let d = encode("chimamanda")
console.log(d)