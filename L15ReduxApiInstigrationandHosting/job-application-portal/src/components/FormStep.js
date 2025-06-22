import { useState } from 'react';

const FormStep = ({ step, values, errors, handleChange, nextStep, prevStep, handleSubmit }) => {
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        if (newSkill.trim() && !values.skills.includes(newSkill.trim())) {
            handleChange({
                target: {
                    name: 'skills',
                    value: [...values.skills, newSkill.trim()]
                }
            });
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        handleChange({
            target: {
                name: 'skills',
                value: values.skills.filter(skill => skill !== skillToRemove)
            }
        });
    };

    switch (step) {
        case 1:
            return (
                <div className="form-step">
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <button onClick={nextStep} className="next-button">
                        Next
                    </button>
                </div>
            );
        case 2:
            return (
                <div className="form-step">
                    <h3>Experience</h3>
                    <div className="form-group">
                        <label>Years of Experience</label>
                        <input
                            type="number"
                            name="experience"
                            value={values.experience}
                            onChange={handleChange}
                            className={errors.experience ? 'error' : ''}
                        />
                        {errors.experience && <span className="error-message">{errors.experience}</span>}
                    </div>

                    <div className="form-group">
                        <label>Skills</label>
                        <div className="skills-input">
                            <input
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="Add a skill"
                            />
                            <button type="button" onClick={handleAddSkill}>
                                Add
                            </button>
                        </div>
                        {errors.skills && <span className="error-message">{errors.skills}</span>}

                        <div className="skills-list">
                            {values.skills.map((skill, index) => (
                                <div key={index} className="skill-tag">
                                    {skill}
                                    <button type="button" onClick={() => handleRemoveSkill(skill)}>
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-navigation">
                        <button onClick={prevStep} className="prev-button">
                            Back
                        </button>
                        <button onClick={nextStep} className="next-button">
                            Next
                        </button>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="form-step">
                    <h3>Additional Information</h3>
                    <div className="form-group">
                        <label>Cover Letter</label>
                        <textarea
                            name="coverLetter"
                            value={values.coverLetter}
                            onChange={handleChange}
                            rows="5"
                        />
                    </div>

                    <div className="form-group">
                        <label>Preferred Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={values.startDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-navigation">
                        <button onClick={prevStep} className="prev-button">
                            Back
                        </button>
                        <button onClick={handleSubmit} className="submit-button">
                            Submit Application
                        </button>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default FormStep;
