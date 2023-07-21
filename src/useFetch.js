import {useState, useEffect} from 'react';
import {paginate} from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = ()=>{
    const[loading, setLoading] = useState(true);
    const[data,setData] = useState([]);

    const getFollowers = async ()=>{
        const response = await fetch(url);
        const responseData = await response.json();
        const paginatedData = paginate(responseData);
        setData(paginatedData);
        setLoading(false);
    }
    
    useEffect(()=>{
        getFollowers()
    },[])
    
    return {loading, data}
}
