https://github.com/adatechschool/Exercices-individuels-Chimamanda-Ngozi-Adichie/blob/master/04_Parlez_vous_le_morse_%3F.md

Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Xelal13 
Xelal13
/
Exercices-individuels-Chimamanda-Ngozi-Adichie
Private
forked from adatechschool/Exercices-individuels-Chimamanda-Ngozi-Adichie
Code
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Exercices-individuels-Chimamanda-Ngozi-Adichie/04_Parlez_vous_le_morse_?.md
@Laurel16
Laurel16 Fix: file name
Latest commit d7fe0a6 yesterday
 History
 1 contributor
108 lines (84 sloc)  2.87 KB

Parlez-vous le morse ? 🆘
1. Enoncé
Cet exercice vise à créer un encodeur et décodeur de morse. Le morse est un alphabet codé qui remplace les caractères par des impulsions représentés par des points (.) ou des tirets (-) suivant si elles sont courtes ou longues.

Si vous le souhaitez, vous pouvez partir du template HTML+CSS+JS pour cet exercice.

Contraintes:

Langage JS
Étape 1
Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList. Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.

Tester la fonction en lui donnant une chaine de caractères “Hello, world”, et assurez-vous qu’elle renvoie bien ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

Étape 2
À votre fichier, ajouter le dictionnaire en annexe 1. Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.

Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.

Tester la fonction en lui donnant en paramètre “A”, et assurez-vous qu’elle renvoie bien .-.

Étape 3
Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1, pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.

Attention: la table de correspondance ne contient que des caractères majuscules.

Étape 4
Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

Étape 5
Pour finir cet exercice, utilisez des champs de saisie input en HTML et des boutons pour traduire du texte et du morse dans un sens ou dans l’autre.

Annexe 1
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
Annexe 2
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
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
