export function ageVerifier(age: number){
    if (age>0){
        if(age<=17 || age >=70){
            return "Invalid"
        } else if (age>17 && age<70){
            return "Valid"
        }
    } else {
        return "Invalid"
    }
}