const calculateBmi = (height: number, weight: number): string => {
    
    let bmi = (weight/(height*height))*10000;
    console.log(bmi)

    if (bmi < 18.5){
        return 'underweight'
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        return 'normal range'
    } 
    else if (bmi >= 25 && bmi <= 29.9){
        return  "overweight"  
    }
    else{
        return "obese"
    }

}


console.log(calculateBmi(180, 74))