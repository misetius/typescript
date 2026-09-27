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
    let periodLength = numbers.length;
    let trainingDays = 0;
    let trainingHours = 0;
    for (let day of numbers){
        if(day > 0){
            trainingDays += 1;
            trainingHours += day;
        }
    }
    let average = trainingHours / periodLength;
    let success = average >= 2;
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
        target: 2,
        average
    };

}


let numbers: number[] = [3, 0, 2, 4.5, 0, 3, 1];

console.log(calculateExercises(numbers));