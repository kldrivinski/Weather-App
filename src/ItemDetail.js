import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function ItemDetail({ match }) {

    //only runs when component mounts
    useEffect(() => {
        fetchItems();
    }, []);


    const [item, setItem] = useState([]);

    const fetchItems = async () => {
        const fetchItem = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`);

        const item = await fetchItem.json();
        console.log(item.drinks[0]);
        setItem(item.drinks[0]);
    };






    return (
        <div className="App">

            <h1> {item.strDrink}</h1>
        </div>
    );
}

export default ItemDetail;
