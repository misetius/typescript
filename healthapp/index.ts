import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';

const app = express();
app.use(express.json());


app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(height, weight);
  return res.json({ weight, height, bmi });
});

app.post('/exercises', (req, res) => {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

    
    if (!daily_exercises || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (daily_exercises.some((exercise: any) => isNaN(Number(exercise))) || isNaN(Number(target))) {
    return res.status(400).json({ error: "malformatted parameters" });
    }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment  
  const dailyExerciseNumbers: number[] = daily_exercises.map((exercise: unknown) => Number(exercise));


  const exerciseData = calculateExercises([Number(target), ...dailyExerciseNumbers]);
  return res.json(exerciseData);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});