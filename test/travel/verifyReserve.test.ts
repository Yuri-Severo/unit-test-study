import { ReserveFly } from "./verifyReserve";

describe("Testing the use flow for reserve a passage",()=>{
    it("Case doesn't have flies for the start or destiny points, error", async ()=>{
        const result = await ReserveFly("Parauapebas","Brasília")
        expect(result).toBe("There are no available flights for these locations.")
    })

    it("Case doesn't have assents in the chosen fly, error", async ()=>{
        const result = await ReserveFly("Belém","Brasília",1,6);
        expect(result).toBe("No available seats on this flight.")
    })

    it("Case the flight choice is invalid, error", async ()=>{
        const result = await ReserveFly("Belém","Brasília",1,3);
        expect(result).toBe("Invalid flight number selected.")
    })

    it("Case the assent chosen is invalid, error", async ()=>{
        const result = await ReserveFly("Belém","São Paulo",1,1,4);
        expect(result).toBe("This seat is not available.")
    })
})