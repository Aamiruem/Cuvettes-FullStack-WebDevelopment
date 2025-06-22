import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ApplicationList = () => {
    const applications = useSelector((state) => state.application.applications);
    const jobs = [
        { id: 1, title: 'Frontend Developer', company: 'Tech Corp' },
        { id: 2, title: 'Backend Developer', company: 'Data Systems' },
        { id: 3, title: 'UX Designer', company: 'Creative Minds' },
    ];

    const getJobTitle = (jobId) => {
        const job = jobs.find(job => job.id === jobId);
        return job ? `${job.title} at ${job.company}` : 'Unknown Job';
    };

    return (
        <div className="applications-page">
            <h1>Your Applications</h1>
            {applications.length === 0 ? (
                <p>You haven't submitted any applications yet.</p>
            ) : (
                <div className="applications-list">
                    {applications.map((app) => (
                        <div key={app.id} className="application-card">
                            <h3>{getJobTitle(app.jobId)}</h3>
                            <p>Applicant: {app.name}</p>
                            <p>Experience: {app.experience} years</p>
                            <Link to={`/applications/${app.id}`} className="view-details">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            <Link to="/" className="back-link">
                Browse more jobs
            </Link>
        </div>
    );
};

export default ApplicationList;
