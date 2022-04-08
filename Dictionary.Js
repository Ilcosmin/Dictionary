var wordArray = [];
function addWordToList() {
	let newWord = document.getElementById("wordToAdd").value;
	if (newWord) {
		wordArray.push(newWord);
		inputMessage.innerHTML = "The word: '" + newWord + "' has been added to the dictionary";
	}
}

function searchWordInList() {
	let searchedWord = document.getElementById("wordToSearch").value;
	let existsWord = wordArray.includes(searchedWord);
	if  (searchedWord !== "") {
		if (existsWord) {
			searchMessage.innerHTML = "This word already exists in the dictionary";
		} else {
			searchMessage.innerHTML = "This word does not exist in the dictionary. You can add it if you want!";
		}
	}
}
