import React from 'react';

import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const data = useResources(resource);
    return (
        <ul>
            {data.map(record => <li key={record.id}>{record.title}</li>)}
        </ul>
    );
};

export default ResourceList;