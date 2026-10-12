import type { Patient } from '../types.ts';
import data from '../data/patients.ts' with  {type: "json"};

const ssn_removed_data = data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
}));

type PatientPreview = Pick<Patient,'id' | 'dateOfBirth' | 'gender' | 'name' | 'occupation' >;

const patients: PatientPreview[] = ssn_removed_data;

const getPatients = (): PatientPreview[] => {
    return patients;
};

export default {
    getPatients
};

