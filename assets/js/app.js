let bill = undefined;
let people = undefined;
let tip = undefined;

// reset calculator
function reset() {
    document.getElementById("bill").outerHTML = '<input type="text" id="bill"  name="bill" value=0.00 required>'
    document.getElementById("custom").outerHTML = '<button id="custom" onclick="setInputField()">';
    document.getElementById("custom").innerHTML = 'Custom';
    document.getElementById("people").outerHTML = '<input type="number" id="people" name="people"  value="0" min="1" step="1" required>'
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
    let total = (bill + tip)/people;

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

function setInputField() {
    document.getElementById("custom").outerHTML = '<input type="text" id="custom" name="custom" value="0" min="0">';
    document.getElementById("custom").focus();
}

