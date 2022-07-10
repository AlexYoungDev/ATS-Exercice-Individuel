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
}


function getLatinCharacterList(word) { // permet de retourné le texte (lolilol) en tableau
    return word.split(""); // permet de diviser une string (espace)
}
//console.log(getLatinCharacterList("lolilol"))

function translateLatinCharacter(char) { // permet de changer une lettre en morse
    return latinToMorse[char]
}
// console.log(translateLatinCharacter("A"))

function encode(word) {
    let letters = getLatinCharacterList(word);
    result = [];
    for (let i=0; i<letters.length; i++){
        let lettre = letters[i];
        let lettreMaj = lettre.toUpperCase()
        let lettreMorse = translateLatinCharacter(lettreMaj);
        // ajout de la lettre morse dans le tableau
        result.push(lettreMorse);
    }
    // retourne le tableau de lettres morse
    return result;
}
//console.log(encode("toto"));


function getMorseCharacterList(word) {
    return word.split(" ");
}
//console.log(getMorseCharacterList(".-. -- -.."));

function getMorseWordList(sentence) {
    return sentence.split(" / ");
}
//console.log(getMorseWordList(".-. -- -.. / ... ---"));


function translateMorseCharacter(char) {
    return morseToLatin[char];
}
//console.log(translateMorseCharacter(".-."));

function decode(sentence) {
    let final = "";
    // division de la phrase en mots morse
    let words = getMorseWordList(sentence);

    for (let i=0; i<words.length; i++) {
        let word = words[i];

        // division d'un mot morse en caractères
        let chars = getMorseCharacterList(word);

        for (let j=0; j < chars.length; j++) {
            let char = chars[j];

            // récupération du caractère latin depuis le morse
            let latinChar = translateMorseCharacter(char);
            final += latinChar;
        }

        // ajout d'un espace entre les mots
        final += " ";
    }
    return final;
}

//console.log(decode("... --- ... / --- ... ---"))

let latin = prompt("Gimme latin");
alert(encode(latin));

let morse = prompt("Gimme morse");
alert(decode(morse));

/*
<html>
  <script src="morse.js"></script>
</html>
*/
