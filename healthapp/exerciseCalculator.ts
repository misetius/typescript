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
    let periodLength = numbers.length-1;
    let trainingDays = 0;
    let trainingHours = 0;
    for (let day of numbers.slice(1)){
        if(day > 0){
            trainingDays += 1;
            trainingHours += day;
        }
    }
    let average = trainingHours / periodLength;
    let target = numbers[0];
    let success = average >= target;
    let rating = 0;
    let ratingDescription = '';

    if (average < 1){
        rating = 1;
        ratingDescription = 'Not the best';
    }
    else if (average >= 1 && average < 2){
        rating = 2;
        ratingDescription = 'Not too bad but could be better';
    }
    else{
        rating = 3;
        ratingDescription = 'Exceptional!';
    }

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