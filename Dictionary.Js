function addWordToList() {
	let newWord = document.getElementById("word").value;
	let addWord = document.createElement("li");
	addWord.setAttribute("id", newWord);
	let ul = document.getElementById("list");
	ul.appendChild(addWord).style.display="none";	
}
