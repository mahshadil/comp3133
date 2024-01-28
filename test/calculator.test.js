const assert=require('assert')
const Calculator=require('../app/calculator')

describe('validation arithmatic function',()=>{
    it('should return 5 by adding two numbers 2+3 ',()=>{
        assert.equal(Calculator.add(2,3),5)
    })
    it('should not return 5 by adding two numbers 2+3 ',()=>{ 
        assert.equal(Calculator.add(2,3),2)
    })
})

describe('validation arithmatic function',()=>{
    it('should return 6 by multiplying two numbers 2*3 ',()=>{
        assert.equal(Calculator.mul(2,3),6)
    })
    it('should not return 6 by multiplying two numbers 2*3 ',()=>{
        assert.equal(Calculator.mul(2,3),7)
    })
})

describe('validation arithmatic function',()=>{
    it('should return 2 by deviding two numbers 4/2 ',()=>{
        assert.equal(Calculator.div(4,2),2)
    })
    it('should not return 2 by deviding two numbers 4/2 ',()=>{
        assert.equal(Calculator.div(4,2),1)
    })
})


describe('validation arithmatic function',()=>{
    it('should return 3 by sub two numbers 4-1 ',()=>{
        assert.equal(Calculator.sub(4,1),3)
    })
    it('should not return 3 by sub two numbers 4-1 ',()=>{
        assert.equal(Calculator.sub(4,1),2)
    })
})
	