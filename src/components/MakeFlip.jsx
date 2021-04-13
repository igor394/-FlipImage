import React from 'react';

const MakeFlip = (props) => {
    return (
        <div>
            <input onClick={props.left} type="button" value="right" />
            <input onClick={props.right} type="button" value="left" />
            <input onClick={props.upDown} type="button" value="up" />
            <input onClick={props.upDown} type="button" value="down" />
        </div>
    );
};

export default MakeFlip;