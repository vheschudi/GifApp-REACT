import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { randomWords } from './helpers/randomWords';


const GifApp = () => {

    const [categories, setCategories] = useState([])

    const handleCategory = (value) => {
        setCategories([value, ...categories]);
    }

    const handleRemoveCategory = index => {
        const value = [...categories];
        value.splice(index, 1);
        setCategories(value);
    }

    const handleRemoveAll = () => {
        setCategories([]);
    }

    const handleRandom = () => {
        const randomvalue = randomWords();
        setCategories([randomvalue, ...categories]);
    }


    return (
        <div className="navbar bg-light">
            <header className="container-fluid shadow-sm p-3 mb-10 bg-body rounded">
                <a className="navbar-brand">GifApp</a>
                <AddCategory addCategory={handleCategory} /> {/* pasamos como atributo/propiedad una función del componente padre al hijo */}
                <div>
                    <button className="btn btn-outline-info" onClick={handleRandom}>Random</button>
                    <button className="btn btn-outline-danger" onClick={handleRemoveAll}>Reset</button>
                </div>
                
            </header>
            <main className='main'>
                {
                    React.Children.toArray(categories.map((category) => (
                                <>
                                <div className='category'>
                                    <h3 className='category-title'>{category}</h3>
                                    <button className="btn btn-outline-warning" onClick={handleRemoveCategory}>Eliminar</button>
                                </div>
                                   
                                    <GifGrid className="categories" key={category} category={category}/>
                                </>
                    )))
                }
            </main>
            <footer className='footer-end'>
                <a>Powered by tears</a>
            </footer>
        </div>
    );
}

export default GifApp;