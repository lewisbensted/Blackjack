class Chips{
    constructor(balance=100){
        this.balance=balance
    }
    add(amount){
        this.balance+=amount
        return this.balance
    }
    bet(amount){
        this.balance-=amount
        return this.balance
    }
}

module.exports=Chips