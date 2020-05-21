import React from 'react';

export const Card = (props) => {
    const { pic, title, content } = props
    return (
        <div style={{ backgroundColor: "gray", width: "250px", height: "400px" }}>
            <div style={{ backgroundColor: "wheat", height: "240px" }}><img src={pic} style={{height:"250px", width: "100%"}} /></div>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div>card footer</div>
        </div>)
}