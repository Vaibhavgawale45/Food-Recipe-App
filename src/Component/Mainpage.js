import React, { useState, useEffect } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const myFun = async () => {
        if (search === "") {
            setMsg("Please Enter Something");
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            setData(jsonData.meals);
            setMsg("");
        }
    };

    useEffect(() => {
        // Fetch 12 random meals
        const fetchRandomMeals = async () => {
            try {
                let meals = [];
                for (let i = 0; i < 5; i++) {
                    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
                    const jsonData = await response.json();
                    meals.push(jsonData.meals[0]);
                }
                setData(meals);
            } catch (error) {
                console.error("Error fetching random meals:", error);
            }
        };

        fetchRandomMeals();
    }, []); // Empty dependency array ensures this runs only once when component mounts

    return (
        <>
            <h1 className='head'>FOOD RECIPE APP</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type='text' placeholder='Enter Dish' onChange={handleInput} />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 className='msg'>{msg}</h4>
                <div>
                    <Mealcards detail={data} />
                </div>
            </div>
        </>
    );
};

export default Mainpage;
