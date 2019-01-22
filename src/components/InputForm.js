import React, {Fragment} from 'react';

const InputForm = (props) => {

    return (
        <Fragment>
            <input id="item-name" placeholder="Movie name" onChange={event=>props.onChangeName(event)}/>
            <button id="add-btn" type="button" onClick={props.onClick} >Add</button>
        </Fragment>
    );
};

export default InputForm;