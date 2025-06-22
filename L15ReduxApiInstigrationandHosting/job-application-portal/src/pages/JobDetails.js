import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();

    // In a real app, this would come from an API or context
    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'Tech Corp',
            description: 'We are looking for an experienced frontend developer...',
            fullDescription: 'Join our team as a Frontend Developer to build amazing user interfaces using React. You will work closely with our design and backend teams to create seamless user experiences.',
            salary: '$80,000 - $100,000',
            requirements: [
                '3+ years of experience with React',
                'Proficiency in JavaScript, HTML, and CSS',
                'Experience with state management (Redux)',
                'Familiarity with RESTful APIs',
            ],
        },
        {
            id: 2,
            title: 'Backend Developer',
            company: 'Data Systems',
            description: 'Join our backend team to build scalable APIs...',
            fullDescription: 'As a Backend Developer, you will be responsible for designing and implementing scalable server-side applications. You will work with Node.js, Express, and various databases to build robust APIs.',
            salary: '$90,000 - $110,000',
            requirements: [
                'Strong experience with Node.js and Express',
                'Knowledge of database systems (SQL and NoSQL)',
                'Understanding of REST and GraphQL APIs',
                'Experience with cloud services (AWS, Azure)',
            ],
        },
        {
            id: 3,
            title: 'UX Designer',
            company: 'Creative Minds',
            description: 'Looking for a creative UX designer to join our team...',
            fullDescription: 'We are seeking a talented UX Designer to create amazing user experiences for our products. You will work closely with product managers and developers to design intuitive interfaces.',
            salary: '$70,000 - $90,000',
            requirements: [
                'Portfolio demonstrating UX design skills',
                'Experience with Figma or Sketch',
                'Understanding of user research methods',
                'Ability to create wireframes and prototypes',
            ],
        },
    ];

    const job = jobs.find(job => job.id === parseInt(id));

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div className="job-details">
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p className="salary">Salary: {job.salary}</p>
            <div className="section">
                <h4>Description</h4>
                <p>{job.fullDescription}</p>
            </div>
            <div className="section">
                <h4>Requirements</h4>
                <ul>
                    {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                    ))}
                </ul>
            </div>
            <Link to={`/apply/${job.id}`} className="apply-button">
                Apply Now
            </Link>
        </div>
    );
};

export default JobDetails;
