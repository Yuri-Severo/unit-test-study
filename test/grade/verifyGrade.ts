export function verifyGrades(grade1Bim: any, grade2Bim: any){
    let result = {
        message: "",
        value: 0
    }

    if(typeof grade1Bim === "number" && typeof grade2Bim === "number" && grade1Bim > 0 && grade2Bim > 0){
        return result = {
            message:"Success: Valid values",
            value: (grade1Bim+grade2Bim)/2
        }
    } else {
        return result = {
            message:"Error: Invalid values",
            value: 0
        }
    }   
}