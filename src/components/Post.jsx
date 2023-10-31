import React from 'react';
import Input from './Input';
import { useState } from 'react';
const Post = ( { supabase } ) => {

    const [cssState, setCssState] = useState(""); // default css class FOR BUTTON

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
        createPerson();
        setCssState("submit")
        setTimeout(() => { setCssState("plain"); }, 1000);
    };
    const createPerson = async () => {
        const { data, error } = await supabase.from("People").insert([
            {
                name: nameText,
                weight: weight,
                height: height,
                age: age,
                sex: sex,
            },
        ]);
        if (error) {
            console.error("Error inserting data: ", error);
        } else {
            console.log("Data inserted successfully:", data);
        }
    };

    return (
        <div className="CONTENT">
            <div className='Post'>
                <h1>Create your own little dude!</h1>
                <Input header='Name' placeholder="Enter it's name" type='text' handleInput={nameInput} />
                <hr />
                <Input header='Weight' placeholder="Enter it's weight" type='number' handleInput={weightInput} />
                <hr />
                <Input header='Height' placeholder="Enter it's height" type='number' handleInput={heightInput} />  
                <hr />
                <Input header='Age' placeholder="Enter it's age" type='number' handleInput={ageInput} />
                <hr />
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
                <hr />
                <button className={cssState} type='button' onClick={handleButton}>Submit</button>
            </div>
        </div>
        
    );
};

export default Post;