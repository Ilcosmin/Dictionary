function addWordToList() {
	let newWord = document.getElementById("word").value;
	let addWord = document.createElement("li");
	addWord.setAttribute("id", newWord);
	let ul = document.getElementById("list");
	ul.appendChild(addWord).style.display="none";	
}

function searchWordInList() {
	let searchWord = document.getElementById("wordToSearch").value;
	let existWord = document.getElementById(searchWord);
	let message = document.querySelector("ul");
	if (existWord) {
		message.innerHTML = "This word already exist in the dictionary";
	} else {
		message.innerHTML = "This word does not exist in the dictionary. You can add it if you want!";
	}
}
