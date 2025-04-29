import { ageVerifier } from "./ageVerifier";

describe("Testing the validity of the ages to vote",() => {
    it("Case is 17, is invalid",()=> {
        const result = ageVerifier(17);
        expect(result).toBe("Invalid");
    })

    it("Case is 18, is valid", ()=>{
        const result = ageVerifier(18);
        expect(result).toBe("Valid");
    })

    it("Case is 69 is valid", ()=>{
        const result = ageVerifier(69);
        expect(result).toBe("Valid");
    })

    it("Case is 70 is invalid", ()=>{
        const result = ageVerifier(70);
        expect(result).toBe("Invalid");
    })
})