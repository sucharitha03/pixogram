import { Calculator } from  "./calculator"



describe("Testing function calc1 of Calculator", ()=>{

    beforeAll(()=>{
        
    }) 

    beforeEach(()=>{
        
    })

    
    
    afterAll(()=>{
         
    })
    
    afterEach(()=>{
      
    })

 
    it('Testing calc1 for negative values', ()=>{    
        // test code
        let calc = new Calculator();
        let response = calc.calc1(-5);
        // expect(<real value>).matchers(<Expected value>);
        expect(response).toBe(5);
    })

    it('Testing calc1 for positive values', ()=>{
        let calc = new Calculator();
        let response = calc.calc1(5);
        
        expect(response).toBe(6);
    })
    describe("Testing function calc1 of Calculator", ()=>{


    it('Testing calc2 for positive values',()=>{
        let calc=new Calculator();
        let response=calc.calc2(5);
        expect(response).toBe(10);
    })
    it('Testing calc2 for negative values', ()=>{    
        // test code
        let calc = new Calculator();
        let response = calc.calc2(-5);
        // expect(<real value>).matchers(<Expected value>);
        expect(response).toBe(5);
})
})
})