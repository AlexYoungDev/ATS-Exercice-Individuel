function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
  console.log("salut")
  	let wellPlaced = [];
    let notInWord = [];
    let missPlaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
		for (let i = 0; i < arrayWord.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) { 
      	wellPlaced.push(arrayWord[i]);
      }	else {
        missPlaced.push(arrayWord[i])
      }
    }
    
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    
    return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInWord: notInWord }
}

function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
 	document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: '+result.missPlaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
  if (result.wellPlaced.length === base.length) {
	  document.getElementById("win").innerText = 'Vous avez gagné'
  }
}

///////////////////////////////////////

// HOW TO CLEAN A CODE !

// 1) Use descriptive names. 
// 2) Never more than two parameters. 
// 3) Function should be small and only do one thing.
// 4) Test (Unit)

///////////////////////////////////////
