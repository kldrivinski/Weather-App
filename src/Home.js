import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Home() {

    //only runs when component mounts
    useEffect(() => {
        fetchItems();
    }, []);


    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

        const items = await data.json();
        console.log(items.drinks);
        setItems(items.drinks);

    };




    return (
        <div className="App">
            {items.map(item => (
                <h1 key={item.strDrink}>
                    <Link to={`/about/${item.idDrink}`} >
                        {item.strDrink}
                    </Link>
                </h1>
            ))}
        </div>
    );
}

export default Home;
