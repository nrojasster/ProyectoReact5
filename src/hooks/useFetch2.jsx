import { useEffect, useState } from 'react'

const useFetch2 = (url, update) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true)
        try {
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const result = await response.json();
            setData(result);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [update, url])
    return { data, loading, error }
}

export default useFetch2