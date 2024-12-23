import React from 'react';

const PublicImageComponent: React.FC = () => {
    return (
        <div>
            <h1>Imagine din folderul public</h1>
            <img src="/images/spinner.gif" alt="Example from Public" style={{ width: '300px' }} />
        </div>
    );
};

export default PublicImageComponent;