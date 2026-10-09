import type { Diagnosis } from '../types.ts';
import data from '../data/diagnoses.ts' with  {type: "json"};


const diagnoses: Diagnosis[] = data;

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses;
};

export default {
    getDiagnoses
};