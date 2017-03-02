var op1 = NaN;
var op2 = NaN;
var muestra_resultado = false;

function cambiador(id, newValue) {
    var elem = document.getElementById(id);
    elem.innerHTML = newValue;
}

function getHTMLfromID(id) {
    return document.getElementById(id).innerHTML;
}

function nuevo_numero(key) {
    var display_content = getHTMLfromID("display");
    if (muestra_resultado === true) {
        display_content = "";
        muestra_resultado = false;
    }
    cambiador("display", display_content.concat(key));
}

function suma() {
    op1 = parseInt(getHTMLfromID("display"), 2);
    if (Number.isNaN(op1)) {
        cambiador("display", "ERROR");
        op1 = NaN;
    } else {
        cambiador("display", "");
    }
}

function resultado() {
    op2 = parseInt(getHTMLfromID("display"), 2);
    if (Number.isNaN(op1) || Number.isNaN(op2)) {
        cambiador("display", "ERROR");
        op1 = NaN;
        op2 = NaN;
    } else {
        var res = op1 + op2;
        cambiador("display", res.toString(2));
    }
    muestra_resultado = true;
}
