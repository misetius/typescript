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

const parseArgumentsBMI = (args: string[]): { height: number, weight: number } => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
    const height = Number(args[2]);
    const weight = Number(args[3]);
    if (isNaN(height) || isNaN(weight)) {
        throw new Error('Provided values were not numbers!');
    }
    return { height, weight };
};

try {
    const { height, weight } = parseArgumentsBMI(process.argv);
    console.log(calculateBmi(height, weight));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error(errorMessage);
}

export { calculateBmi };