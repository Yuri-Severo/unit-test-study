import { verifyGrades } from "./verifyGrade";

describe("Testing the grades to calculate the mean", ()=>{
    it("Case grades are chars, return error message", ()=>{
        const result = verifyGrades("a","b")
        expect(result?.message).toBe("Error: Invalid values")
    })

    it("Case grades are null, return error message", ()=>{
        const result = verifyGrades(0,0)
        expect(result?.message).toBe("Error: Invalid values")
    })
    
    it("Case grades are negatives, return error message", ()=>{
        const result = verifyGrades(-10,-4)
        expect(result?.message).toBe("Error: Invalid values")
    })

    it("Case grades are positives, return success message", ()=>{
        const result = verifyGrades(8,10)
        expect(result?.message).toBe("Success: Valid values")
        expect(result?.value).not.toBeNaN()
    })

})