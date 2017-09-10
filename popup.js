/**
 * Listens for click event of the 'Change' button
 * and executes click function when click event occurs
 **/
document.addEventListener('DOMContentLoaded', function() {
	var d = document.getElementById("Change");
	d.addEventListener('click', click);
});

/**
 * Retrieves values typed into the 'from' and 'to' input fields
 * and executes the content.js file
 **/
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
