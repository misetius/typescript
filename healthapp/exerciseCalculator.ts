interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (numbers: number[]): ExerciseResult => {
    const periodLength = numbers.length-1;
    let trainingDays = 0;
    let trainingHours = 0;
    for (const day of numbers.slice(1)){
        if(day > 0){
            trainingDays += 1;
            trainingHours += day;
        }
    }
    const average = trainingHours / periodLength;
    const target = numbers[0];
    const success = average >= target;



    if (average < 1 && average > 0){
        const rating = 1;
        const ratingDescription = 'Not the best';
        return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
    }
    else if (average >= 1 && average < 2){
        const rating = 2;
        const ratingDescription = 'Not too bad but could be better';
        return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }; 
    }
    
    else{
        const rating = 3;
        const ratingDescription = 'Exceptional!';
        return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }; 
}
};

const parseArguments = (args: string[]): number[] => {
    if (args.length < 4) throw new Error('Not enough arguments');
    const numbers: number[] = [];
    for (let i = 2; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            throw new Error('Provided values were not numbers!');
        }
        numbers.push(Number(args[i]));
    }
    return numbers;
};

try {
    const numbers = parseArguments(process.argv);
    console.log(calculateExercises(numbers));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error(errorMessage);
}