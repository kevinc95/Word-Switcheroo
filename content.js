var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
			var fromWord = window.elementIDs.fromWord;
			var toWord = window.elementIDs.toWord;
			
            var text = node.nodeValue;
            var replacedText = text.replace(new RegExp(fromWord, 'gi'), toWord);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
