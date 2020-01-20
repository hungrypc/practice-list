import { useState, useEffect } from 'react';

import jsonPlaceholder from './apis/jsonPlaceholder';

const useResources = resource => {
    const [data, setData] = useState([]);

    const fetchResource = async (resource) => {
        const response = await jsonPlaceholder.get(`/${resource}`);
        setData(response.data);
    }

    //useEffect adds lifecycle methods to functional components
    useEffect(() => {
        fetchResource(resource)
    }, [resource]);
    // we put resource in the [] as a way to make the same effect of componentDidUpdate
    // -> if the elements in the array are different, the arrow fn gets called
    // useEffect doesnt like async, you gotta async INSIDE the function fed into useEffect

    return data;
}

export default useResources;