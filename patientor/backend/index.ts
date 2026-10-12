import express from 'express';
import diagnosesService from './services/diagnosesService.ts';
import patientsService from './services/patientsService.ts';


const app = express();

import cors from 'cors';


app.use(cors());

app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  res.send(diagnosesService.getDiagnoses());
});

app.get('/api/patients', (_req, res) => {
  res.send(patientsService.getPatients());
});

app.post('/api/patients', (req, res) => {
    const newPatient = req.body;
    const addedPatient = patientsService.addPatient(newPatient);
    res.json(addedPatient);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});