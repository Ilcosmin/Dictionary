var wordArray = [];
function addWordToList() {
	let newWord = document.getElementById("wordToAdd").value;
	if (newWord.match("[a-z]")) {
		wordArray.push(newWord);
		inputMessage.innerHTML = "The word: '" + newWord + "' has been added to the dictionary";
		inputMessage.style.backgroundColor = "Aqua";
	}
}

function searchWordInList() {
	let searchedWord = document.getElementById("wordToSearch").value;
	if  (searchedWord.match("[a-z]")) {
		let existsWord = wordArray.includes(searchedWord);
		if (existsWord) {
			searchMessage.innerHTML = "This word already exists in the dictionary";
			searchMessage.style.backgroundColor = "SpringGreen";
		} else {
			searchMessage.innerHTML = "This word does not exist in the dictionary. You can add it if you want!";
			searchMessage.style.backgroundColor = "red";
		}
	}
}
