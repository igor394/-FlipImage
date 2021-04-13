import React from 'react';

const Image = (props) => {
    return (
        <img src="fish.png" alt="images" style={{transform: `rotate(${props.flip}deg)`}} />
    );
};

export default Image;