const {_values}=require('./values.js')
const Card=require('./card.js')

class Hand{
    constructor(name){
        this.name=name
        this.cards=[]
        this.score=0
        this.aces=0
    }
    addCard(card){
        this.cards.push(card)
        this.score+=_values[card.rank]
        if (card.rank=='Ace'){
            this.aces+=1
        }
        return this.cards
    }
    adjustAces(){
        while(this.aces>0 && this.score>21){
            this.aces-=1
            this.score-=10
        }
        return this.cards
    }
}

module.exports=Hand