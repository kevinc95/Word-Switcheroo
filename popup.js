function click(e) {
	
	var elementIDs = {
		fromWord: document.getElementById("from").value,
		toWord: document.getElementById("to").value
	};
	
	chrome.tabs.executeScript({
		code: 'window.elementIDs='+JSON.stringify(elementIDs)
	}, function() {
		chrome.tabs.executeScript({file: "content.js"});
	});
	window.close;
}

document.addEventListener('DOMContentLoaded', function() {
	var d = document.getElementById("Change");
	d.addEventListener('click', click);
});