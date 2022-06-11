import { useState, useEffect } from 'react';
import Header from './components/Header/header.component';
import CardList from './components/CardList/cardlist.component';
import Searchbox from './components/SearchBox/searchbox.component';
import { stockData } from "./data";
import './app.scss';
import './custom.scss';
export default function App() {

    const [items, setItems] = useState(stockData);
    const [searchField, setSearchField] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const newFilteredData = stockData.filter((data) => {
            return data.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredData(newFilteredData);
    }, [items, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="app">
            <Header />
            <div className='cardlist-container text-center'>
                <Searchbox onChangeHandler={onSearchChange} />
                <CardList stockData={filteredData} />
            </div>
        </div>
    )
}
