import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const fetchJobs = async () => {
            try {
                // In a real app, this would be an actual API call
                const mockJobs = [
                    {
                        id: 1,
                        title: 'Frontend Developer',
                        company: 'Tech Corp',
                        description: 'We are looking for an experienced frontend developer...',
                    },
                    {
                        id: 2,
                        title: 'Backend Developer',
                        company: 'Data Systems',
                        description: 'Join our backend team to build scalable APIs...',
                    },
                    {
                        id: 3,
                        title: 'UX Designer',
                        company: 'Creative Minds',
                        description: 'Looking for a creative UX designer to join our team...',
                    },
                ];
                setJobs(mockJobs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div>Loading jobs...</div>;
    }

    return (
        <div className="home">
            <h1>Available Jobs</h1>
            <div className="jobs-list">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Home;
