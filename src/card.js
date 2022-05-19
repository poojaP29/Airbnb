import React from 'react';
import './App.css';
export default function Card(props){
   

    return(
        <div className="card">
            <img src={`${props.img}`} className="images" alt="logo" />
            <div className="starImg">
                <img src="Star 1.png" className='star'  />
                <span>{props.rating}</span>
                <span className="graytext">({props.reviewCount}) .{props.location}</span>
                <span className="graytext">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} /Person</p>
        
        </div>
    );
        
}