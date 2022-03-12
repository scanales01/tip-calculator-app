// class Calculator {
//     constructor(tipTextElement, totalTextElement) {
//         this.tipTextElement = tipTextElement
//         this.totalTextElement = totalTextElement
//         this.reset()
//     }

//     reset() {
//         this.tip = '0.00'
//         this.total = '0.00'
//         this.bill = '0.00'
//         this.people = '0.00'
//         this.tipSelection = undefined
//     }

//     update() {
//         if (this.tipSelection != null) {
//         } else {
//             this.tipTextElement.innerText = '0.00'
//             this.totalTextElement.innerText = '0.00'
//         }
//     }
// }

// const tipButtons = document.querySelectorAll('[data-number]')
// const inputs = document.querySelectorAll('[data-input]')
// const resetButton = document.querySelector('[data-reset]')
// const tipTextElement = document.querySelector('[data-tip]')
// const totalTextElement = document.querySelector('[data-total]')

// const calculator = new Calculator(tipTextElement, totalTextElement)

// resetButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
//   })

// reset calculator
function reset() {
    document.getElementById("bill").outerHTML = '<input type="text" id="bill"  name="bill" value=0.00 required>'
    document.getElementById("people").outerHTML = '<input type="number" id="people" name="people"  value="0" min="1" step="1" required>'
    document.getElementById("tip").innerText = '0.00'
    document.getElementById("total").innerText = '0.00'
}

function calculate(tipPercent) {
    let bill = Number(document.getElementById("bill").value)
    let people = Number(document.getElementById("people").value)

    if(people < 1) {
    } else {
        let tipAmount = (bill * tipPercent)/people
        let total = (bill + tipAmount)/people

        document.getElementById("tip").innerText = tipAmount
        document.getElementById("total").innerText = total
    }
}
    

