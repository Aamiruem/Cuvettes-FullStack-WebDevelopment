import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ApplicationSummary = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const application = useSelector((state) =>
        state.application.applications.find((app) => app.id === parseInt(id))
    );

    if (!application) {
        return <div>Application not found</div>;
    }

    const handleEdit = () => {
        navigate(`/apply/${application.jobId}`, { state: { application } });
    };

    return (
        <div className="application-summary">
            <h1>Application Summary</h1>

            <div className="section">
                <h3>Personal Information</h3>
                <p>Name: {application.name}</p>
                <p>Email: {application.email}</p>
                <p>Phone: {application.phone}</p>
            </div>

            <div className="section">
                <h3>Experience</h3>
                <p>Years of Experience: {application.experience}</p>
                <div>
                    <h4>Skills:</h4>
                    <ul>
                        {application.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="section">
                <h3>Additional Information</h3>
                <p>Cover Letter: {application.coverLetter}</p>
                <p>Preferred Start Date: {application.startDate}</p>
            </div>

            <div className="actions">
                <button onClick={handleEdit} className="edit-button">
                    Edit Application
                </button>
                <button onClick={() => navigate('/applications')} className="back-button">
                    Back to Applications
                </button>
            </div>
        </div>
    );
};

export default ApplicationSummary;
