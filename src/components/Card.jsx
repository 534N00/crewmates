import React from 'react';
import { Link } from 'react-router-dom';

const Card = ( { id, name, age, weight, height, sex, handleDelete } ) => {

    return (
        <div className={`Card ${sex}`}>
            {/* <Link to="/edit"> */}
                <h3>{name}</h3>
                <p><b>Age: </b>{age}</p>
                <p><b>Weight: </b>{weight}</p>
                <p><b>Height: </b>{height}</p>
                <p><b>Sex: </b>{sex}</p>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <Link to={`/edit/${id}`} >
                    <button onClick={() => console.log(`edit id: ${id}`)}>Edit</button>
                </Link>
                <Link to={`/info/${id}`} >
                    <button onClick={() => console.log(`edit id: ${id}`)}>Info</button>
                </Link>          
        </div>
    );
};

export default Card;