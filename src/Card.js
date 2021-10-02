import React from 'react';
// import Card from './Card';

const Card = ({name, email, id}) => {
    return(
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`http://robohash.org/${id}?100x100`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    ); 
}

export default Card;