const Chips=require('./../src/chips.js')

describe('Test chips class', function(){
    it('Test add method', function(){
        //SETUP
        const chips=new Chips(100)

        //VERIFY

        //EXECUTE
        expect(chips.add(5)).toBe(105)
    })
    it('Test bet method', function(){
        //SETUP
        const chips=new Chips(100)

        //VERIFY

        //EXECUTE
        expect(chips.bet(5)).toBe(95)
    })
})