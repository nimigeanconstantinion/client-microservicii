import React from 'react';
import { getEnvVariables } from '../../utility/envUtils';

const MyComponent: React.FC = () => {
    const env = getEnvVariables();

    return (
        <div>
            <p>API URL: {env.REACT_APP_API_URL}</p>
        </div>
    );
};

export default MyComponent;