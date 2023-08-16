import React from 'react';

import { useAppSelector } from '../types/redux';

function Container() {
    const images = useAppSelector(state => state.images);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                padding: '100px',
                width: '100%',
            }}
        >
            {images.map(image => (
                <img
                    key={image.id}
                    src={image.url}
                    alt=""
                    style={{ width: '200px', height: '200px' }}
                />
            ))}
        </div>
    );
}

export default Container;
