import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
            <Link to={`/job/${job.id}`} className="view-details">
                View Details
            </Link>
        </div>
    );
};

export default JobCard;
