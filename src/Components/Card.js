import React from 'react';

const Card = ({id, name, email}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?set=set2`} />
            <div>
                <h3>{name}</h3>
                <h5>{email}</h5>
            </div>
        </div>

    );
}
export default Card;