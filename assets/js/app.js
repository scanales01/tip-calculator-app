let bill = undefined;
let people = undefined;
let tip = undefined;

// reset calculator
function reset() {
    document.getElementById("bill").outerHTML = '<input type="number" id="bill"  name="bill" value="0.00" step="0.01" oninput=update() required>'
    document.getElementById("custom").outerHTML = '<button id="custom" onclick="setInputField()">';
    document.getElementById("custom").innerHTML = 'Custom';
    document.getElementById("people").outerHTML = '<input type="number" id="people" name="people"  value="0" min="1" step="1" oninput=update() required>'
    document.getElementById("tip").innerText = '0.00'
    document.getElementById("total").innerText = '0.00'
}

function formatNumbers(number) {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(number);
}

function checkPeople() {
    if (people < 1) {
        document.getElementById("people").style.border = "2.5px solid red";
    } else {
        document.getElementById("people").style.border = "transparent";
        calculate();
    }
    
}

// calculate tip and total
function calculate() {
    if (tip === undefined) {
        tip = 0;
    }
    let tipAmount = (bill * tip)/people;
    let total = (bill + tipAmount)/people;

    document.getElementById("tip").innerText = formatNumbers(tipAmount);
    document.getElementById("total").innerText = formatNumbers(total);
}

function update() {
    setBill();
    setPeople();
    checkPeople();
}

function setBill() {
    bill = Number(document.getElementById("bill").value);
}

function setPeople() {
    people = Number(document.getElementById("people").value);
}

function setTip(newTip) {
    tip = newTip;
    update();
}

function setCustomTip() {
    tip = document.getElementById("custom").value / 100;
    update();
}

function setInputField() {
    document.getElementById("custom").outerHTML = '<input type="number" id="custom" name="custom" value="0" min="0" oninput="setCustomTip()">';
    document.getElementById("custom").focus();
}

