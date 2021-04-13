import React from 'react';

const View = (props) => {
    let out = '';
    if(!props.view){
        out= '';
    } else {
        out = <img className="pred-view" src={props.view} alt="url is not correct" style={{transform: `rotate(${props.flip}deg)`}}/>;
    }
    return (
        <div>
            {out}
        </div>

    );
};

export default View;