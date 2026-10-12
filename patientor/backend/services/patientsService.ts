import type { Patient, NewPatient } from '../types.ts';
import data from '../data/patients.ts' with  {type: "json"};
import { v4 as uuidv4 } from 'uuid';

const patientdata = data;

const ssn_removed_data = patientdata.map(({ id, name, dateOfBirth, gender, occupation }) => ({
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

const addPatient = (patient: NewPatient): Patient => { 
    
    const newpatient = {
        id: uuidv4(),
        ...patient
    };

    patientdata.push(newpatient);
    return newpatient;

};

export default {
    getPatients,
    addPatient
};

