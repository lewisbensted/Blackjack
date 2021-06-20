const Card=require('./card.js')

class Deck{
    constructor(ranks, suits){
        this.deck=[]
        for (let suit of suits){
            for(let rank of ranks){
                this.deck.push(new Card(rank, suit))
            }
        }
    }
    shuffle(){
        this.deck.sort((a,b)=>{
            return Math.random()-.5
        })
    }
    deal(){
        return this.deck.pop()
    }
}

module.exports=Deck