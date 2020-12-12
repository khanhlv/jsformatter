String.space = function(a) {
    var b = [],
        e;
    for (e = 0; e < a; e++) b.push(" ");
    return b.join("")
};

function convertFormat() {
	var a = document.querySelector("#input").value;
	
	var value = js_beautify(a, {
            indent_size: 1,
            indent_char: "  "
        });
	
	document.querySelector("#input").focus();
	if (value) {
		document.querySelector("#input").value = value;
	}
}

function convertClear() {
	document.querySelector("#input").focus();
	document.querySelector("#input").value = '';
}

function convertRemoveSpace() {
	var a = document.querySelector("#input").value;
	
	document.querySelector("#input").focus();
	if (value) {
		document.querySelector("#input").value = value;
	}
}

