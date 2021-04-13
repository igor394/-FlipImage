import React from 'react';

const Image = (props) => {
    return (
        <div className="wrap-img">
            <div>
                <img className="front-img" src={props.img} alt="images" style={{transform: `rotate(${props.flip}deg)`}} />
            </div>

        </div>

    );
};

export default Image;