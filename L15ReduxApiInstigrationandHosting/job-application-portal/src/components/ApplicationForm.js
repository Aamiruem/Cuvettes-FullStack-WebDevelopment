import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addApplication, editApplication } from '../redux/applicationSlice';
import useForm from '../hooks/useForm';
import FormStep from './FormStep';

const ApplicationForm = () => {
    const { id: jobId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { application } = useSelector((state) => ({
        application: state.application.applications.find(app => app.jobId === parseInt(jobId))
    }));
    const [step, setStep] = useState(1);

    const validate = (values) => {
        const errors = {};

        if (step === 1) {
            if (!values.name) errors.name = 'Name is required';
            if (!values.email) errors.email = 'Email is required';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                errors.email = 'Email is invalid';
            }
            if (!values.phone) errors.phone = 'Phone is required';
        }

        if (step === 2) {
            if (!values.experience) errors.experience = 'Experience is required';
            if (values.skills.length === 0) errors.skills = 'At least one skill is required';
        }

        return errors;
    };

    const { values, errors, handleChange, validateForm } = useForm(
        application || {
            jobId: parseInt(jobId),
            name: '',
            email: '',
            phone: '',
            experience: '',
            skills: [],
            coverLetter: '',
            startDate: '',
        },
        validate
    );

    const nextStep = () => {
        if (validateForm()) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        if (validateForm()) {
            if (application) {
                dispatch(editApplication({ ...values, id: application.id }));
            } else {
                dispatch(addApplication({ ...values, id: Date.now() }));
            }
            navigate('/applications');
        }
    };

    return (
        <div className="application-form">
            <h2>Job Application</h2>
            <div className="progress-bar">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>

            <FormStep
                step={step}
                values={values}
                errors={errors}
                handleChange={handleChange}
                nextStep={nextStep}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default ApplicationForm;
