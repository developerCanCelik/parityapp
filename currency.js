class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency,
        this.secondCurrency = secondCurrency,
        this.url = "https://api.exchangeratesapi.io/latest?base=",
        this.amaount = null
    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency]
                const amaount2 = Number(this.amaount)
                let total = parity * amaount2
                resolve(total)
            })
            .catch(err => reject(new Error(err)))
        })
    }
    changeAmaount(amaount){
        this.amaount = amaount
    }
    changeFirstCurrency(newfirstCurrency){
        this.firstCurrency = newfirstCurrency
    }
    changeSecondCurrency(newsecondCurrency){
        this.secondCurrency = newsecondCurrency
    }
    
}