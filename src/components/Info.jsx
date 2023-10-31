import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Info = ( { supabase } ) => {
    const { id } = useParams();
    const [thing, setThing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from("People").select().match({ id: id });
            if (error) {
                console.error("Error fetching data: ", error);
            } else {
                console.log("Data fetched successfully:", data);
                setThing(data); // Set 'thing' when data is available
                setIsLoading(false); // Set 'isLoading' to false
            }
        };

        fetchData(); // Call the fetchData function to initiate data fetching
    }, [id]); // Make sure to add 'id' as a dependenc

    return (
        <div className="CONTENT">
            <div className="Info">
                {isLoading ? (
                    <div>Loading...</div>
                ) :  (
                    <>
                        <h1>Info on this particular dude:</h1>
                        <hr />
                        <h3>{thing[0].name}</h3>
                        <p><b>Age: </b>{thing[0].age}</p>
                        <p><b>Weight: </b>{thing[0].weight}</p>
                        <p><b>Height: </b>{thing[0].height}</p>
                        <p><b>Sex: </b>{thing[0].sex}</p>
                        <hr />
                        <h4>Seems like a pretty neat dude!</h4>
                    </>
                )}
            </div>
        </div>
    );
};

export default Info;