import React from 'react';
import Input from './Input';
import { useState } from 'react';
const Post = () => {

    const [nameText, setNameText] = useState('');
    const nameInput = (e) => {
        setNameText(e.target.value);
    };

    const [weight, setWeight] = useState(0.0);
    const weightInput = (e) => {
        setWeight(e.target.value);
    };

    const [height, setHeight] = useState(0.0);
    const heightInput = (e) => {
        setHeight(e.target.value);
    };

    const [age, setAge] = useState(0);
    const ageInput = (e) => {
        setAge(e.target.value);
    };

    const [sex, setSex] = useState('other');
    const sexInput = (e) => {
        setSex(e.target.value);
    }

    const handleButton = () => {
        // all the supabase stuff
        
    };

    return (
        <div className="CONTENT">
            <div className='Post'>
                <h1>Create your own little dude!</h1>
                <Input header='Name' placeholder="Enter it's name" type='text' handleInput={nameInput} />
                <Input header='Weight' placeholder="Enter it's weight" type='number' handleInput={weightInput} />
                <Input header='Height' placeholder="Enter it's height" type='number' handleInput={heightInput} />  
                <Input header='Age' placeholder="Enter it's age" type='number' handleInput={ageInput} />
                {/* Sex input */}
                <div className="Input">
                    <h3>Sex</h3>
                    <form id="form">
                        <label>
                            <input type="radio" name='sex' value='male' checked={sex === 'male'} onChange={sexInput} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name='sex' value='female' checked={sex === 'female'} onChange={sexInput} />
                            Female
                        </label>
                        <label>
                            <input type="radio" name='sex' value='other' checked={sex === 'other'} onChange={sexInput} />
                            Other
                        </label>
                    </form>
                </div>
                <button type='button' onClick={handleButton}>Submit</button>
            </div>
        </div>
        
    );
};

export default Post;