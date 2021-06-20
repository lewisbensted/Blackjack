const Hand=require('./../src/hand.js')

const cardOne={rank:'Ace', suit:'Hearts'}
const cardTwo={rank:'Nine', suit:'Diamonds'}
const cardThree={rank:'Ace', suit:'Spades'}

describe('Test hand class', function(){
    it('Test cards can be added', function(){
        //SETUP
        const hand=new Hand('Player')

        //EXECUTE
        hand.addCard(cardOne)
        

        //VERIFY
        expect(hand.cards[0]).toBe(cardOne)
        expect(hand.cards.length).toBe(1)
        expect(hand.aces).toBe(1)
        expect(hand.score).toBe(11)
    })
    it('Test Adjust for aces', function(){
        //SETUP
        const hand=new Hand('Player')

        //EXECUTE
        hand.addCard(cardOne)
        hand.addCard(cardTwo)
        hand.addCard(cardThree)
        hand.adjustAces()

        //VERIFY
        expect(hand.aces).toBe(1)
        expect(hand.score).toBe(21)
        

    })
})