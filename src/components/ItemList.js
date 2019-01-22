import React from 'react';

const ItemList = (props) => {
    return (
        <div className="item" id={props.id}>
            <input id={props.id} onChange={(event)=>props.onChange(event)} value={props.name}/>
            <div className="btn-div"><img className="btn-img" id={props.id} src={props.imgUrl} alt="btn" onClick={(event)=>props.onClick(event)}/></div>
            {console.log(props.name)}
        </div>
    );
};

export default ItemList;