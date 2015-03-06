(function initialize() {
    document.body.setAttribute("onload", "calculate();");
    document.getElementById("reset_button").setAttribute("onclick", "document.getElementById('counter').reset(); calculate(); document.getElementById('B100').focus();");
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length - 2; i++) {
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
        // Validate and filter input - only digits are allowed, no leading zeroes, no decimal points
        var result = document.getElementById(id).value.replace(/\D/g, '').replace(/^0+/, '');
        // In case of empty input or any other non-valid value
        if (isNaN(result)) result = 0;
        // Place validated value back in the text field
        document.getElementById(id).value = result;
        return result;
    }

    var B100 = (parseInt(getValue('B100') * (100)));
    document.getElementById('B100').setAttribute("title", "$" + B100);
    var B50  = (parseInt(getValue('B50') * (50)));
    document.getElementById('B50').setAttribute("title", "$" + B50);
    var B20  = (parseInt(getValue('B20') * (20)));
    document.getElementById('B20').setAttribute("title", "$" + B20);
    var B10  = (parseInt(getValue('B10') * (10)));
    document.getElementById('B10').setAttribute("title", "$" + B10);
    var B5   = (parseInt(getValue('B5') * (5)));
    document.getElementById('B5').setAttribute("title", "$" + B5);
    var B1   = (parseInt(getValue('B1') * (1)));
    document.getElementById('B1').setAttribute("title", "$" + B1);
    var C25  = (parseFloat(getValue('C25') / (4)));
    document.getElementById('C25').setAttribute("title", "$" + C25);
    var C10  = (parseFloat(getValue('C10') / (10)));
    document.getElementById('C10').setAttribute("title", "$" + C10);
    var C5   = (parseFloat(getValue('C5') / (20)));
    document.getElementById('C5').setAttribute("title", "$" + C5);
    var C1   = (parseFloat(getValue('C1') / (100)));
    document.getElementById('C1').setAttribute("title", "$" + C1);
  
    var ALL  = parseInt(B100 + B50 + B20 + B10 + B5 + B1) + parseFloat(C25 + C10 + C5 + C1);
    var DEP  = parseFloat(ALL - 150);
    if (DEP <= 0) {
        document.getElementById("hidden_row").style.display = "none";
    }
    else {
        document.getElementById("hidden_row").style.display = "table-row";
    };
    ALL = parseFloat(ALL).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    DEP = parseFloat(DEP).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    document.getElementById("total").value = ALL;
    document.getElementById("deposit").value = DEP;
};
