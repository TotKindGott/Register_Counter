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
    document.getElementById("B100").focus();
})();

function calculate() {

    function one_by_one(id, multi) {
        // Validate and filter input - only digits are allowed, no leading zeroes, no decimal points
        var user_input = document.getElementById(id).value.replace(/\D/g, '').replace(/^0+/, '');
        // In case of empty input or any other non-valid value
        if (isNaN(user_input)) user_input = 0;
        // Place validated value back in the text field
        document.getElementById(id).value = user_input;
        var result;
        // If result is expected to be an integer, i.e. bills
        if (multi % 1 === 0) {
            result = parseInt((user_input) * (multi));
        } 
        // If result is expected to be a floating-point value
        else {
            result = parseFloat((user_input) * (multi));
        }
        // Show individual total as a tooltip over a text field
        document.getElementById(id).setAttribute("title", "$" + result);
//          console.log(id + ' ' + result);
        return result;
    }

    var B100 = one_by_one("B100", 100);
    var  B50 = one_by_one("B50", 50);
    var  B20 = one_by_one("B20", 20);
    var  B10 = one_by_one("B10", 10);
    var   B5 = one_by_one("B5", 5);
    var   B1 = one_by_one("B1", 1);
    var  C25 = one_by_one("C25", 0.25);
    var  C10 = one_by_one("C10", 0.1);
    var   C5 = one_by_one("C5", 0.05);
    var   C1 = one_by_one("C1", 0.01);
  
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
