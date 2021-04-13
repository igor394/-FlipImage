import React from 'react';

const SelectImg = (props) => {
    return (
        <div>
            <form onSubmit={props.select}>
                <input onChange={props.view}  type="url" name="url"/>
                <button type="submit">Save</button>
            </form>
        </div>

    );
};

export default SelectImg;