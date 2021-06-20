const Deck=require('./../src/deck.js')

const suits=['Hearts']
const ranks=['Jack', 'Queen', 'King']


describe('Test deck class', function(){
    it('Test deck correctly constructed', function(){
        //SETUP
        const deck =new Deck(ranks, suits)
        //EXECUTE

        //VERIFY
        expect(deck.deck.length).toBe(3)
        expect(deck.deck[0].suit).toBe('Hearts')
        expect(deck.deck[0].rank).toBe('Jack')
        expect(deck.deck[1].suit).toBe('Hearts')
        expect(deck.deck[1].rank).toBe('Queen')
        expect(deck.deck[2].suit).toBe('Hearts')
        expect(deck.deck[2].rank).toBe('King')
    })

    it('Test shuffle method', function(){
        //SETUP
        const deck =new Deck(ranks, suits)
        spyOn(global.Math, 'random').and.returnValue(0)
        //EXECUTE
        deck.shuffle()
        //VERIFY
        expect(deck.deck[0].rank).toBe('King')
        expect(deck.deck[1].rank).toBe('Queen')
        expect(deck.deck[2].rank).toBe('Jack')
    })
    it('Test deal method', function(){
        //SETUP
        const deck =new Deck(ranks, suits)
        //EXECUTE
        let dealtCard=deck.deal()
        //VERIFY
        expect(dealtCard.rank).toBe('King')
        expect(dealtCard.suit).toBe('Hearts')
        expect(deck.deck.length).toBe(2)
    })
})