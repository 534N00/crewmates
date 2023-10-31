import React, { useState, useEffect } from 'react';
import Card from './Card';

const Gallery = ( { supabase } ) => {

    const [myData, setMyData] = useState([]); 

    const fetchData = async () => {
        const { data, error } = await supabase.from("People").select();
        if (error) {
            console.error("Error fetching data: ", error);
        } else {
            console.log("Data fetched successfully:", data);
            return data;
        }
        return [];
    };

    const fetchAndSetData = async () => {
        const data = await fetchData();
        setMyData(data);
    };
    useEffect(() => {
        fetchAndSetData();
    }, []);

    const handleDelete = async (id) => {
        const { info, error } = await supabase.from("People").delete().match({ id: id });
        if (error) {
            console.error("Error deleting data: ", error);
        } else {
            console.log("Data deleted successfully:", info);
            fetchAndSetData();
        }
    };

    return (
        <div className="CONTENT">
            <div className="Gallery">
                <h1>Gallery</h1>
                <h2>Look at all those chickens!</h2>
                <div className="gallery-cards">
                    {myData.map((rowData) => (
                        <Card key={rowData.id} id={rowData.id} name = {rowData.name} age={rowData.age}
                              weight={rowData.weight} height={rowData.height} sex={rowData.sex}
                              handleDelete={() => handleDelete(rowData.id)} />
                    ))}
                </div>
                
            </div>
        </div>
        
    );
};

export default Gallery;