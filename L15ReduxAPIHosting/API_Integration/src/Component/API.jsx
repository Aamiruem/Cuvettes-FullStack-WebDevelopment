import axios from 'axios'

const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const API = () => {
    return (
        <div>
            <h1>API Integration</h1>
            <p>This is a simple API integration example.</p>
            <button onClick={fetchData}>Fetch Data</button>
            <p>Check the console for API response.</p>
        </div>
    )
}

export default API
