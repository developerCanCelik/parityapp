// Elementleri seçme
const amountElement = document.querySelector("#amount")
const firstSelect = document.querySelector("#firstCurrency")
const secondSelect = document.querySelector("#secondCurrency")
const currency = new Currency("USD","TRY")
const ui = new UI(firstSelect,secondSelect)
eventListener()
function eventListener(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
        //hangi options seçildiğiyse onu alma işlemi yaptık
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst()
    }
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
}
function exchangeCurrency(){
    currency.changeAmaount(amountElement.value)
    currency.exchange()
    .then(resolve => {
        ui.totalResult(resolve)
    })
    .catch(err => console.log(err))
}