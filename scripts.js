(function initialize() {
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length - 1; i++) {
		var el = inputs[i];
		el.setAttribute("min", "0");
		el.setAttribute("step", "0");
		el.setAttribute("value", "0");
		el.setAttribute("placeholder", "0");
		el.setAttribute("onkeyup", "calculate()");
		el.setAttribute("onchange", "calculate()");
		var selector = el.id;
		el.setAttribute("onfocus", "if(document.getElementById('" + selector + "').value == '0') {document.getElementById('" + selector + "').value = ''}");
		el.setAttribute("onblur", "if(document.getElementById('" + selector + "').value == '') {document.getElementById('" + selector + "').value = '0'}");
	}
})();
 
function calculate() {
 
	function getValue(id) {
		var result = document.getElementById(id).value.replace(/\D/g, '');
		document.getElementById(id).value = result;
		return result;
	}
 
	var B100 = (parseInt(getValue('B100') * (100)));
	var B50  = (parseInt(getValue('B50') * (50)));
	var B20  = (parseInt(getValue('B20') * (20)));
	var B10  = (parseInt(getValue('B10') * (10)));
	var B5   = (parseInt(getValue('B5') * (5)));
	var B1   = (parseInt(getValue('B1') * (1)));
	var C25  = (parseFloat(getValue('C25') / (4)));
	var C10  = (parseFloat(getValue('C10') / (10)));
	var C5   = (parseFloat(getValue('C5') / (20)));
	var C1   = (parseFloat(getValue('C1') / (100)));
	var ALL  = parseInt(B100 + B50 + B20 + B10 + B5 + B1) + parseFloat(C25 + C10 + C5 + C1);
	ALL = parseFloat(ALL).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
	document.getElementById("total").value = ALL;
}
